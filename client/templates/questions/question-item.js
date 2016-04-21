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
      return "#";
    } else {
      return "/users/" + author;
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
