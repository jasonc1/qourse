Template.coursesList.helpers({
  courses: function() {
    return Courses.find({}, {sort: {title: 1}});
  }
});
