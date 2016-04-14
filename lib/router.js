FlowRouter.route('/', {
  name: 'dashboard',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "dashboard"});
  }
});

questionGroup = FlowRouter.group({
  prefix: '/questions'
});

questionGroup.route('/', {
  name: 'allQuestions',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "questionList"});
  }
});

questionGroup.route('/:_id', {
  name: 'questionPage',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "questionItem"}); 
  }
})

courseGroup = FlowRouter.group({
  prefix: '/courses'
});

courseGroup.route('/', {
  name: 'allCourses',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "courseList"});
  }
});

courseGroup.route('/:_id', {
  name: 'coursePage',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "courseItem"});
  }
});