FlowRouter.route('/', {
  name: 'dashboard',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "dashboard"});
  }
});