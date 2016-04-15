Template.userItem.helpers({
  user: function() {
    var userVar = FlowRouter.getParam("username");
    return Meteor.users.findOne({username: userVar});
  },
});
