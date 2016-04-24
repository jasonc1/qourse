Template.commentItem.helpers({
  showDelete: function() {
    if (this.author === "Anonymous User") return;

    var authorId = Meteor.users.findOne({username: this.author })._id;
    if (authorId === Meteor.userId()) {
      return Spacebars.SafeString("<a class='details delResponse' href='#'>DELETE RESPONSE</a>");
    }
  },

  momentFormat: function(time) {
    if ((moment().unix() - moment(time).unix()) < 3600) {
      return moment(time).fromNow();
    } else {
      return moment(time).format("hh:mm a ddd, MMM D YYYY");
    }
  },

  genUserURL: function(author) {
    if (author === "Anonymous User") {
      return "";
    } else {
      return "/users/" + author;
    }
  },
});

Template.commentItem.events({
  'click .delResponse': function(e) {
    e.preventDefault();

    if (confirm("Delete this response?")) {
      Meteor.call('deleteResponse', this._id);
    }
  }
});
