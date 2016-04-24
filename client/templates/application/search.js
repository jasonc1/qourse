if (Meteor.isClient) {
  var options = {
    keepHistory: 1000 * 60 * 5,
    localSearch: true
  };

  Template.search.rendered = function () {
    var searchParam = FlowRouter.getParam('searchParam');
    if (searchParam !== '' && searchParam !== undefined) {
      QuestionSearch.search(searchParam);
    }
  }

  var fields = ['title', 'description'];

  QuestionSearch = new SearchSource('questions', fields, options);

  Template.search.helpers({
    getQuestions: function() {
      return QuestionSearch.getData({
        transform: function(matchText, regExp) {
          return matchText.replace(regExp, "$&")
        },
        sort: {isoScore: -1}
      }); 
    }, 

    isLoading: function() {
      return QuestionSearch.getStatus().loading;
    },

  });

  Template.search.events({
    'keyup .searchInput': _.throttle(function(e) {
       var text = $(e.target).val().trim();
       QuestionSearch.search(text);
     }, 200),

    'submit .search' (event) {
      event.preventDefault();
    }
  });
}
