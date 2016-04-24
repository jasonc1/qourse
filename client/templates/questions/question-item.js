Template.questionItem.rendered = function () {
  if (Questions.find({_id: FlowRouter.current().params._id}).count() === 0) {
    BlazeLayout.render('layout', {content: 'notFound'});
  }
}

Template.questionItem.helpers({
  question: function() {
    return Questions.findOne({_id: FlowRouter.current().params._id});
  },

  responseCount: function() {
    return Comments.find({questionId: FlowRouter.current().params._id}).count();
  },

  momentFormat: function(time) {
    if ((moment().unix() - moment(time).unix()) < 3600) {
      return moment(time).fromNow();
    } else {
      return moment(time).format("hh:mm a ddd, MMM D YYYY");
    }
  },

  genUserURL: function(author) {
    if (author == "Anonymous User") {
      return "";
    } else {
      return "/users/" + author;
    }
  },

  genTags: function(tags) {
    if (!tags) return;

    if (tags.length !== 0) {
      var returnStr = "Tags: ";

      for (var i = 0; i < tags.length; i++) {
        tags.length[i] = tags[i].trim();
        if (i == tags.length - 1) {
          returnStr += "<a>" + tags[i] + "</a> ";
        } else {
          returnStr += "<a>" + tags[i] + "</a>, ";
        }
      }

      return Spacebars.SafeString(returnStr);
    }
  },

  showDelete: function() {
    if (this.author === "Anonymous User") return;
    var authorId = Meteor.users.findOne({username: this.author })._id;
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
    var auth = "";

    var anon = document.getElementById('anon');
    console.log(anon.checked);
    if (anon.checked) {
      auth = "Anonymous User"; 
    } else {
      auth = Meteor.user().username;
    }

    var response = {
      content: comment,
      questionId: FlowRouter.current().params._id,
      author: auth
    }

    Meteor.call('insertResponse', response); 
 
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

