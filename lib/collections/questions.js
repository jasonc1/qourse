Questions = new Mongo.Collection('questions');

Questions.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

if (Meteor.isServer) {
  Meteor.publish('questions', function questionPublication() {
    return Questions.find();
  });

  Meteor.methods({
    deleteQuestion : function(questionId) {
       Comments.remove({"questionId": questionId});
       Questions.remove({"_id": questionId});
    }
  });
}

