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
    },

    insertQuestion: function(questionAttributes) {
      check(Meteor.userId(), String);

      var user = Meteor.user();
      var post = _.extend(questionAttributes, {
        userId: user._id,
        author: user.username,
        time: new Date()
      });

      var questionId = Questions.insert(post);
      return { _id: questionId };
    }
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("questions");
}
