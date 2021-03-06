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

    if (text === "") { return };

    var tagsArr = tags.split(", ");
    if (tags === "") {
      tagsArr = [];
    }
 
    var anon = document.getElementById('anon');
    var auth = "";
   
    if (anon.checked) {
      auth = "Anonymous User";
    } else {
      auth = Meteor.user().username;
    }

    var question = {
      title: $(event.target).find('[name=question]').val(),
      description: $(event.target).find('[name=description]').val(),
      tags: tagsArr,
      author: auth,
    };

    Meteor.call('insertQuestion', question);

    target.question.value = '';
    target.description.value = '';
    target.tags.value = '';
  },
});
