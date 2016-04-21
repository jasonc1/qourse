Template.questionListItem.helpers({
  responseCount: function() {
    return Comments.find({questionId: this._id}).count();
  },

  genUserURL: function() {
    if (this.author == "Anonymous User") {
      return "#";
    } else {
      return "/users/" + this.author;
    }
  }
});
