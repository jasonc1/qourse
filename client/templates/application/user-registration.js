if (Meteor.isClient) {
  Template.register.events({
    'submit form': function(event) {
      event.preventDefault();
      console.log("Form submitted.");
      var userVar = event.target.registerUsername.value;
      var emailVar = event.target.registerEmail.value;
      var passVar = event.target.registerPassword.value;

      Accounts.createUser({
        username : userVar,
        email : emailVar,
        password : passVar
      });
    }
  });
}