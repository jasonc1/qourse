if (Meteor.isServer) {
  Meteor.publish("userData", function() {
    return Meteor.users.find({}, {fields: {username: 1}});
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("userData");
}
