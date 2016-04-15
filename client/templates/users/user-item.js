Template.userItem.helpers({
  user: function() {
    var userVar = FlowRouter.getParam("username");
    return Meteor.users.findOne({username: userVar});
  },

  userQuestions: function() {
    var userVar = FlowRouter.getParam("username");
    return Questions.find({author: userVar}, {sort: {time: -1}});
  }
});
