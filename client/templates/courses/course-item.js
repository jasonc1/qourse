Template.courseItem.helpers({
  course: function() {
    return Courses.findOne({_id: FlowRouter.current().params._id});
  },

  relatedQuestions: function() {
    console.log("getting related questions..." + this.courseNum);
    return Questions.find({tags: {$all: [this.courseNum] }});
    //var course = Courses.findOne({_id: FlowRouter.current().params._id});
    //console.log("Course " + course);
    //return Questions.find({tags: {$all: [course.courseNum]}});
    // return Questions.find();
  }
});
