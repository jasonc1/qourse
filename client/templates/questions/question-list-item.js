Template.questionListItem.helpers({
  responseCount: function() {
    var count = Comments.find({questionId: this._id}).count();
    if (count == 1) {
      return count + " Response";
    } else {
      return count + " Responses";
    }
  },

  momentFormat: function(time) {
    if ((moment().unix() - moment(time).unix()) < 3600) {
      return moment(time).fromNow();
    } else {
      return moment(time).format("hh:mm a ddd, MMM D YYYY");
    }
  },

  genUserURL: function() {
    if (this.author == "Anonymous User") {
      return "";
    } else {
      return "/users/" + this.author;
    }
  },

  genTags: function() {
    if (!this.tags) return;

    if (this.tags.length != 0) {
      var returnStr = "Tags: ";

      for (var i = 0; i < this.tags.length; i++) {
        this.tags.length[i] = this.tags[i].trim();
        if (i == this.tags.length - 1) {
          returnStr += "<a href='/search/" + this.tags[i] + "'>" + this.tags[i] + "</a> ";
        } else {
          returnStr += "<a href='/search/" + this.tags[i] + "'>" + this.tags[i] + "</a>, ";
        }
      }

      return Spacebars.SafeString(returnStr);
    }
  }
});
