Questions = new Mongo.Collection('questions');

if (Meteor.isServer) {
  Meteor.publish('questions', function questionPublication() {
    return Questions.find();
  });
}

