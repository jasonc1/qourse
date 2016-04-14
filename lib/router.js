FlowRouter.route('/', {
  name: 'dashboard',
  action: function() {
    BlazeLayout.render('layout', {content: 'dashboard'});
  },
});
