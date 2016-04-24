if (Meteor.isClient) {
  Template.search.events({
    'submit .search' (event) {
      event.preventDefault();
      Session.set('searchValue', event.target.search.value);
      console.log("initiating search for " + event.target.search.value);
    }
  });
}
