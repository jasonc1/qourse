if (Questions.find().count() === 0) {
  Questions.insert({
    title: "How is 05-499C Crowd Programming?",
    description: "I want to take a fun class with Professor Bigham!"
  });

  Questions.insert({
    title: "How is 15-112 with Kosbie?",
    description: "I have no programming experience."
  });

  Questions.insert({
    title: "What's the easiest CS Logic elective?",
    description: "Ideally less than 8 hours of work per week."
  });    
}

if (Courses.find().count() === 0) {
  Courses.insert({
    title: "15-112",
    description: "A technical introduction to the fundamentals of programming with an emphasis on producing clear, robust, and reasonably efficient code using top-down design, informal analysis, and effective testing and debugging. Starting from first principles, we will cover a large subset of the Python programming language, including its standard libraries and programming paradigms. We will also target numerous deployment scenarios, including standalone programs, shell scripts, and web-based applications. This course assumes no prior programming experience. Even so, it is a fast-paced and rigorous preparation for 15-122. Students seeking a more gentle introduction to computer science should consider first taking 15-110. NOTE: students must achieve a C or better in order to use this course to satisfy the pre-requisite for any subsequent Computer Science course."
  });
}
