if (Meteor.isClient) {
  var options = {
    localSearch: true
  };

  Template.courseItem.rendered = function () {
    if (Courses.find({_id: FlowRouter.current().params._id}).count() === 0) {
      BlazeLayout.render('layout', {content: 'notFound'});
    } else {
      var courseNum = Courses.findOne({_id: FlowRouter.current().params._id}).courseNum;
      QuestionSearch.search(courseNum);
    }
  }

  Template.courseItem.helpers({
    course: function() {
      return Courses.findOne({_id: FlowRouter.current().params._id});
    },

    relatedQuestions: function() {
      return QuestionSearch.getData({
        transform: function(matchText, regExp) {
          return matchText.replace(regExp, "$&")
        },
        sort: {isoScore: -1}
      });
    },

  });
}


