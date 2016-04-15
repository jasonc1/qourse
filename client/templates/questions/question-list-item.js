Template.questionListItem.helpers({
  responseCount: function() {
    return Comments.find({questionId: this._id}).count();
  }
});
