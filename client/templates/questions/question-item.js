Template.questionItem.helpers({
  question: function() {
    return Questions.findOne({_id: FlowRouter.current().params._id});
  },

  responseCount: function() {
    return Comments.find({questionId: FlowRouter.current().params._id}).count();
  },

  genUserURL: function(author) {
    console.log("hello ");
    console.log(author);
    if (author == "Anonymous User") {
      return "";
    } else {
      return "/users/" + author;
    }
  },

  genTags: function(tags) {
    if (tags != "") {
      var returnStr = "Tags: ";

      for (var i = 0; i < tags.length; i++) {
        tags.length[i] = tags[i].trim();
        if (i == tags.length - 1) {
          returnStr += "<a href='/search/" + tags[i] + "'>" + tags[i] + "</a> ";
        } else {
          returnStr += "<a href='/search/" + tags[i] + "'>" + tags[i] + "</a>, ";
        }
      }

      return Spacebars.SafeString(returnStr);
    }
  }
});

Template.questionItem.events({
  'submit .new-response': function (event) {
    event.preventDefault();

    const target = event.target;
    const comment = target.answer.value;
 
    Comments.insert({
      content: comment,
      author: Meteor.user().username,
      time: new Date(),
      questionId: FlowRouter.current().params._id,
    });

    console.log("comment added");

    target.answer.value = '';
  }, 
});
