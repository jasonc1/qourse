Comments = new Mongo.Collection('comments');

Comments.allow({
  remove: function(userId, post) { return ownsDocument(userId, post); },
  update: function(userId, post) { return ownsDocument(userId, post); }
});

if (Meteor.isServer) {
  Meteor.publish('comments', function commentPublication() {
    return Comments.find();
  });

  Meteor.methods({
    deleteResponse: function(responseId) {
      Comments.remove({"_id": responseId});
    },

    insertResponse: function(responseAttr) {
      check(Meteor.userId(), String);

      var user = Meteor.user();
      var response = _.extend(responseAttr, {
        userId: user._id,
        time: new Date()
      });

      var respId = Comments.insert(response);
      return { _id: respId };
    }


  });
}

if (Meteor.isClient) {
  Meteor.subscribe("comments");
}
