Template.userItem.helpers({
  user: function() {
    var userVar = FlowRouter.getParam("username");
    return Meteor.users.findOne({username: userVar});
  },

  userQuestions: function() {
    var userVar = FlowRouter.getParam("username");
    return Questions.find({author: userVar}, {sort: {time: -1}});
  },

  genBio: function(user) {
    var returnStr = "";

    if (user.profile.major != undefined && user.profile.major != "") {
      returnStr += "<li>Major: " + user.profile.major + "</li>";
    }

    if (user.profile.year != undefined && user.profile.year != "") {
      returnStr += "<li>Year: " + user.profile.year + "</li>";
    }

    if (user.profile.interests != undefined && user.profile.interests != "") {
      returnStr += "<li>Interests: " + user.profile.interests + "</li>";
    }

    return Spacebars.SafeString(returnStr);
  }
});
