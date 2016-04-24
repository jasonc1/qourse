Template.courseItem.rendered = function () {
  if (Courses.find({_id: FlowRouter.current().params._id}).count() === 0) {
    BlazeLayout.render('layout', {content: 'notFound'});
  }
}

Template.courseItem.helpers({
  course: function() {
    return Courses.findOne({_id: FlowRouter.current().params._id});
  },

  relatedQuestions: function() {
    return Questions.find({tags: {$all: [this.courseNum]}});
  }
});
