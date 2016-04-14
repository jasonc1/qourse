if (Questions.find().count() === 0) {
  Questions.insert({
    title: "Should I take 15-451 in the fall or spring?",
    author: "Nappy",
    time: "11:33PM 4/13/16",
    tags: ["15-451"]
  });

  Questions.insert({
    title: "What's the best physics course to take in the fall?",
    author: "Nappy",
    time: "11:00PM 4/13/16",
    tags: ["Physics", "Fall 2016"]
  });
}

if (Courses.find().count() === 0) {
  Courses.insert({
    courseNum: "15-112",
    title: "Fundamentals of Programming and Computer Science",
    description: "A technical introduction to the fundamentals of programming with an emphasis on producing clear, robust, and reasonably efficient code using top-down design, informal analysis, and effective testing and debugging. Starting from first principles, we will cover a large subset of the Python programming language, including its standard libraries and programming paradigms. We will also target numerous deployment scenarios, including standalone programs, shell scripts, and web-based applications. This course assumes no prior programming experience. Even so, it is a fast-paced and rigorous preparation for 15-122. Students seeking a more gentle introduction to computer science should consider first taking 15-110. NOTE: students must achieve a C or better in order to use this course to satisfy the pre-requisite for any subsequent Computer Science course.",
    units: 12,
    
  });
}
