Template.courseItem.helpers({
  item: function() {
    return Courses.findOne({_id: FlowRouter.current().params._id});
  }
});