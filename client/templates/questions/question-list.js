Template.questionList.helpers({
  questions: function() {
    return Questions.find({}, {sort: {time: -1}});
  },
});

Template.questionList.events({
  'submit .new-question' (event) {
    event.preventDefault();
    
    const target = event.target;
    const text = target.question.value;

    var anon = document.getElementById('anon');
    if (anon.checked) {
      auth = "Anonymous User";
    } else {
      auth = Meteor.user().username;
    }

    Questions.insert({
      title: text,
      author: auth,
      time: new Date(),
    });

    target.question.value = '';
  },
});
