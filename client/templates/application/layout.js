Template.layout.onCreated(function bodyOnCreated() {
  Meteor.subscribe('questions');
  Meteor.subscribe('comments');
  Meteor.subscribe('courses');
});

Template.layout.helpers({

});
