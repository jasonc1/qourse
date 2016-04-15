Template.userItem.helpers({
  user: function() {
    console.log(FlowRouter.current().params);
    console.log(Meteor.user().username);
    var temp = Meteor.users.findOne({username: FlowRouter.current().params.username});
    console.log(temp.username);
    return temp;
  },

  compareCurUser: function() {
    var profileUser = Meteor.users.findOne({username: FlowRouter.current().params.username});
    console.log("profile: " + profileUser.username + ", current: " + Meteor.user().username);
    return (profileUser.username === Meteor.user().username);
  }
});
