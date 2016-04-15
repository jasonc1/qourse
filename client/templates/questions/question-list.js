Template.questionList.helpers({
  questions: function() {
    console.log("hi?");
    return Questions.find({}, {sort: {time: -1}});
  },
});

Template.questionList.events({
  'submit .new-question' (event) {
    event.preventDefault();
    
    const target = event.target;
    const text = target.question.value;

    Questions.insert({
      title: text,
      author: Meteor.user().profile.username,
      time: new Date(),
    });

    target.question.value = '';
  },
});
