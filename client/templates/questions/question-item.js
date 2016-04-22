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
    if (!tags) return;

    if (tags.length != 0) {
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
  },

  showDelete: function() {
    var authorId = Meteor.users.findOne({username: this.author })._id;
    console.log(authorId);
    console.log(Meteor.userId());
    if (authorId === Meteor.userId()) {
      return Spacebars.SafeString("<a class='details delPost' href='#'>DELETE POST</a>");
    }
  }
});

Template.questionItem.events({
  'submit .new-response': function (event) {
    event.preventDefault();

    const target = event.target;
    const comment = target.answer.value;

    var response = {
      content: comment,
      questionId: FlowRouter.current().params._id,
      author: Meteor.user().username,
    }

    Meteor.call('insertResponse', response); 
 
    console.log("comment added");

    target.answer.value = '';
  }, 

  'click .delPost': function(e) {
    e.preventDefault();
    
    if (confirm("Delete this post?")) {
      Meteor.call('deleteQuestion', this._id);
      FlowRouter.go('/');
    }
  }
});

