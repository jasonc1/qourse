Template.questionListItem.helpers({
  responseCount: function() {
    var count = Comments.find({questionId: this._id}).count();
    if (count == 1) {
      return count + " Response";
    } else {
      return count + " Responses";
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
