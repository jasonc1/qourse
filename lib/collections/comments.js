Comments = new Mongo.Collection('comments');

if (Meteor.isServer) {
  Meteor.publish('comments', function commentPublication() {
    return Comments.find();
  });
}

