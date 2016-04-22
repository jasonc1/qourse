Template.register.events({
  'submit .user-register' (event) {
    event.preventDefault();

    const target = event.target;
    var userVar = target.registerUsername.value;
    var emailVar = target.registerEmail.value;
    var passVar = target.registerPassword.value;

    var majorVar = target.registerMajor.value;
    var yearVar = target.registerYear.value;
    var interestsVar = target.registerInterests.value;

    Accounts.createUser({
      username: userVar, 
      email: emailVar, 
      password: passVar,
      profile: {
        major: majorVar,
        year: yearVar,
        interests: interestsVar
      }
    });

  },
});

Accounts.onLogin(function() {
  var path = FlowRouter.current().path;
  // we only do it if the user is in the login page
  if(path === "/register"){
    FlowRouter.go("/");
  }
});
