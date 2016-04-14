Template.loggedInHeader.helpers({
  username: function() {
    return Meteor.user().username;
  }

});