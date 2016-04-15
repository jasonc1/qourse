Template.commentList.helpers({
  comments: function() {
    var varQuestionId = FlowRouter.getParam("_id");
    return Comments.find({questionId: varQuestionId});
  }
});
