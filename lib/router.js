FlowRouter.route('/', {
  name: 'dashboard',
  action: function() {
    BlazeLayout.render('layout', {content: 'dashboard'});
  },
});

questionGroup = FlowRouter.group({
  prefix: '/questions'
});

questionGroup.route('/', {
  name: 'allQuestions',
  action: function() {
    BlazeLayout.render('layout', {content: 'questionList'});
  }
});

questionGroup.route('/:_id', {
  name: 'questionPage', 
  action: function() {
    BlazeLayout.render('layout', {content: 'questionItem'}); 
  }
});

courseGroup = FlowRouter.group({
  prefix: '/courses'
});

courseGroup.route('/', {
  name: 'allCourses', 
  action: function() {
    BlazeLayout.render('layout', {content: 'courseList'});
  }
});

courseGroup.route('/:_id', {
  name: 'coursePage', 
  action: function() {
    BlazeLayout.render('layout', {content: 'courseItem'});
  }
});

userGroup = FlowRouter.group({
  prefix: '/users'
});

userGroup.route('/:username', {
  name: 'userPage',
  action: function() {
    BlazeLayout.render('layout', {content: 'userItem'});
  }
});
