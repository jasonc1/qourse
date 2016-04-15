Template.courseList.helpers({
  courses: function() {
    return Courses.find({}, {sort: {courseNum: 1}});
  }
});
