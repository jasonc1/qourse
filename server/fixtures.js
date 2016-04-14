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
