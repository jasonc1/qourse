Template.questionListItem.helpers({
  responseCount: function() {
    console.log("hi");
    return Comments.find({questionId: this._id}).count();
  }
});
