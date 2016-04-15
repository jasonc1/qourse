Template.courseItem.helpers({
  course: function() {
    return Courses.findOne({_id: FlowRouter.current().params._id});
  },
});
