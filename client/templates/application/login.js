Template.login.events({
  'submit .user-login' (event) {
    event.preventDefault();
    console.log("hi");

    const target = event.target;
    var userVar = target.loginUsername.value;
    var passVar = target.loginPassword.value;

    Meteor.loginWithPassword(userVar, passVar, function(error) {
      if (error != undefined) { 
        alert(error.reason);
      }
    });
  },
});

Accounts.onLogin(function() {
  var path = FlowRouter.current().path;
  // we only do it if the user is in the login page
  if(path === "/login"){
    FlowRouter.go("/");
  }
});

Accounts.onLoginFailure(function() {
  var path = FlowRouter.current().path;
  if (path === "/login") {
    FlowRouter.go('/login');
  }
});
