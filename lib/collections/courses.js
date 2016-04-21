Courses = new Mongo.Collection('courses');

if (Meteor.isServer) {
  Meteor.publish('courses', function coursePublication() {
    var allCourses = Courses.find();
    if (allCourses) {
      return allCourses;
    }

    return this.ready();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("courses");
  console.log("courses ready");
}
