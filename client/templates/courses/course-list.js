Template.courseList.helpers({
  courses: function() {
    return Courses.find({}, {sort: {title: 1}});
  }
});
