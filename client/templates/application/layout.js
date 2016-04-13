if (Meteor.isClient) {
  Template.layout.onRendered(function(){
      $(".dropdown-button").dropdown();
  });

}