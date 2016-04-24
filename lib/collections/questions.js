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
        time: new Date()
      });

      var questionId = Questions.insert(post);
      return { _id: questionId };
    }
  });

  SearchSource.defineSource('questions', function(searchText, options) {
    var options = {sort: {isoScore: -1}, limit: 20};

    if (searchText) {
      var regExp = buildRegExp(searchText);
      var selector = {$or: [
        {title: regExp},
        {description: regExp},
      ]};

      return Questions.find(selector, options).fetch();
    } else {
      return Questions.find({}, options).fetch();
    }
  });

  function buildRegExp(searchText) {
    var parts = searchText.trim().split(/[ \-\:]+/);
    return new RegExp("(" + parts.join('|') + ")", "ig");
  }
}

if (Meteor.isClient) {
  Meteor.subscribe("questions");
}
