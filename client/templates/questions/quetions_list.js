var questionsData = [
  {
    title: "How is 05-499C Crowd Programming?",
    description: "I want to take a fun class with Professor Bigham!"
  },
  {
    title: "How is 15-112 with Kosbie?",
    description: "I have no programming experience."
  },
  {
    title: "What's the easiest CS Logic elective?",
    description: "Ideally less than 8 hours of work per week."
  }
];

Template.questionsList.helpers({
  questions: questionsData,
});
