Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [ 
      Meteor.subscribe('questions'),
      Meteor.subscribe('courses'),
    ];
  }
});

Router.route('/', {name: 'questionsList'});

Router.route('/questions/:_id', {
  name: 'questionPage',
  data: function() { return Questions.findOne(this.params._id); }
});

Router.route('/courses', { name: 'coursesList' });

Router.route('/courses/:_id', {
  name: 'coursePage',
  data: function() { 
    return Courses.findOne(this.params._id);
  }
});

Router.route('/about', {
  name: 'aboutPage',
})

Router.onBeforeAction('dataNotFound', { only: ['questionPage', 'coursePage']});
