Template.register.events({
  'submit .user-register' (event) {
    event.preventDefault();
    console.log("hi");

    const target = event.target;
    var userVar = target.registerUsername.value;
    var emailVar = target.registerEmail.value;
    var passVar = target.registerPassword.value;

    console.log(userVar);
    console.log(emailVar);
    console.log(typeof passVar);
    Accounts.createUser({
      username: userVar, 
      email: emailVar, 
      password: passVar
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
