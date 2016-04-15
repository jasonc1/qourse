Courses = new Mongo.Collection('courses');

if (Meteor.isServer) {
  Meteor.publish('courses', function coursePublication() {
    return Courses.find();
  });
}

