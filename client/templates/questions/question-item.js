Template.questionItem.helpers({
  item: function() {
    return Questions.findOne({_id: FlowRouter.current().params._id});
  }
});