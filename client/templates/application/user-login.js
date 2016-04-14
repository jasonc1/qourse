if (Meteor.isClient) {
  Template.login.events({
    'submit form': function(event) {
      event.preventDefault();
      console.log("Form submitted.");
      var userVar = event.target.loginUsername.value;
      var passVar = event.target.loginPassword.value;
      Meteor.loginWithPassword(userVar, passwordVar);
    }
  });
}