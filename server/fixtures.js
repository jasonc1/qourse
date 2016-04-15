if (Questions.find().count() === 0) {
  // Add some questions to see

  Questions.insert({
    title: "Should I take 15-451 in the fall or spring?",
    author: "nappy",
    time: new Date(),
    tags: ["15-451", "SCS"]
  });

  Questions.insert({
    title: "What's the best physics course to take in the fall?",
    author: "nappy",
    time: new Date(),
    tags: ["Physics", "Fall 2016"]
  });

  Questions.insert({
    title: "How are classes with Jeff Bigham?",
    author: "nappy",
    time: new Date(),
    tags: ["Bigham", "HCI"]
  });
}

if (Courses.find().count() === 0) {
  Courses.insert({
    courseNum: "15-451",
    title: "Algorithm Design and Analysis",
    description: "This course is about the design and analysis of algorithms. We study specific algorithms for a variety of problems, as well as general design and analysis techniques. Specific topics include searching, sorting, algorithms for graph problems, efficient data structures, lower bounds and NP-completeness. A variety of other topics may be covered at the discretion of the instructor. These include parallel algorithms, randomized algorithms, geometric algorithms, low level techniques for efficient programming, cryptography, and cryptographic protocols.",
    units: 12,
    instructors: ["Sleator, Daniel", "Kingsford, Carleton"],
    semester: ["Fall", "Spring"]
  });

  Courses.insert({
    courseNum: "15-112", 
    title: "Fundamentals of Programming and Computer Science",
    description: "A technical introduction to the fundamentals of programming with an emphasis on producing clear, robust, and reasonably efficient code using top-down design, informal analysis, and effective testing and debugging. Starting from first principles, we will cover a large subset of the Python programming language, including its standard libraries and programming paradigms. We will also target numerous deployment scenarios, including standalone programs, shell scripts, and web-based applications. This course assumes no prior programming experience. Even so, it is a fast-paced and rigorous preparation for 15-122. Students seeking a more gentle introduction to computer science should consider first taking 15-110. NOTE: students must achieve a C or better in order to use this course to satisfy the pre-requisite for any subsequent Computer Science course.",
    units: 12,
    instructors: ["Kosbie, David", "Stehlik, Mark"],
    semester: ["Fall", "Spring"]
  });

}

