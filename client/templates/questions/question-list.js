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
    const desc = target.description.value;
    const tags = target.tags.value;
 
    const tagsArr = tags.split(", ");

    var anon = document.getElementById('anon');
    if (anon.checked) {
      auth = "Anonymous User";
    } else {
      auth = Meteor.user().username;
    }

    Questions.insert({
      title: text,
      author: auth,
      description: desc,
      tags: tagsArr,
      time: new Date(),
    });

    target.question.value = '';
  },
});
