Template.commentItem.helpers({
  showDelete: function() {
    var authorId = Meteor.users.findOne({username: this.author })._id;
    console.log(authorId);
    console.log(Meteor.userId());
    if (authorId === Meteor.userId()) {
      return Spacebars.SafeString("<a class='details delResponse' href='#'>DELETE RESPONSE</a>");
    }
  }
});

Template.commentItem.events({
  'click .delResponse': function(e) {
    e.preventDefault();

    if (confirm("Delete this response?")) {
      Meteor.call('deleteResponse', this._id);
    }
  }
});
