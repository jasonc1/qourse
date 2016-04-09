Meteor.publish('questions', function() {
  return Questions.find();
});

Meteor.publish('courses', function() {
  return Courses.find();
});
