Template.login.events({
  'submit .user-login' (event) {
    event.preventDefault();
    console.log("hi");

    const target = event.target;
    var userVar = target.loginUsername.value;
    var passVar = target.loginPassword.value;

    Meteor.loginWithPassword(userVar, passVar);
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
  alert("Login failed");
  var path = FlowRouter.current().path;
  if (path === "/login") {
    FlowRouter.go('/login');
  }
});
