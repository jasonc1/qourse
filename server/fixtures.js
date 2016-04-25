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
    courseNum: "15-112", 
    title: "Fundamentals of Programming and Computer Science",
    description: "A technical introduction to the fundamentals of programming with an emphasis on producing clear, robust, and reasonably efficient code using top-down design, informal analysis, and effective testing and debugging. Starting from first principles, we will cover a large subset of the Python programming language, including its standard libraries and programming paradigms. We will also target numerous deployment scenarios, including standalone programs, shell scripts, and web-based applications. This course assumes no prior programming experience. Even so, it is a fast-paced and rigorous preparation for 15-122. Students seeking a more gentle introduction to computer science should consider first taking 15-110. NOTE: students must achieve a C or better in order to use this course to satisfy the pre-requisite for any subsequent Computer Science course.",
    units: 12,
    instructors: "Kosbie, David; Stehlik, Mark",
    semester: ["Fall", "Spring"]
  });

  Courses.insert({
    courseNum: "48-025",
    title: "First Year Seminar: Architecture Edition I",
    description: "In this course, students will learn about effective strategies for teaching architecture and the built environment. Topics include the cognitive differences between novices and experts, instructional techniques, and goal alignment. As part of the coursework, each student will implement these teaching strategies to design and teach a lesson. Elements of developmental psychology, learning theories, and classroom practices will inform the architectural education lesson. Teaching and learning techniques can be generalized for communication with clients, practice, and the community.",
    units: 3,
    instructors: "Workinger, Heather", 
  });

  Courses.insert({
    courseNum: "60-101",
    title: "Concept Studio: The Self and the Human Being",
    description: "Concept Studio: The Self and the Human Being is first of a sequence of six studio courses designed to develop a personal approach to generating art and to learning transferable conceptual skills. The topics of the first three Concept Studios are addressed through a sequence of structured, media-independent projects. Open to freshmen admitted to the School of Art, or by instructor permission.",
    units: 10,
    instructors: "Marides, Patricia; Beck, Kimberly; Neuhaus, Celeste" 
  });

  Courses.insert({
    courseNum: "70-122",
    title: "Introduction to Accounting", 
    description:"This course provides the knowledge and skills necessary for the student to understand financial statements and financial records and to make use of the information for management and investment decisions. Topics include: an overview of financial statements and business decisions; the balance sheet, the income statement, and the cash flow statement; sales revenue, receivables, and cash; cost of goods sold and inventory; long-lived assets and depreciation, and amortization; current and long-term liabilities; owners equity; investments in other corporations; an introduction to financial statement analysis and international issues dealing with financial statements.",
    units: 9,
    instructors: "Ruchti, Thomas" 
  });

  Courses.insert({
    courseNum: "42-101",
    title: "Introduction to Biomedical Engineering",
    description:"This course will provide exposure to basic biology and engineering problems associated with living systems and health care delivery. Examples will be used to illustrate how basic concepts and tools of science engineering can be brought to bear in understanding, mimicking and utilizing biological processes. The course will focus on four areas: biotechnology, biomechanics, biomaterials and tissue engineering and biosignal and image processing and will introduce the basic life sciences and engineering concepts associated with these topics. Pre-requisite OR co-requisite: 03-121 Modern Biology.",
    units: 12,
    instructors: "Washburn, Newell"
  });

  Courses.insert({
    courseNum: "09-105",
    title: "Introduction to Modern Chemistry I",
    description: "This course begins with a very brief survey of some fundamental principles of chemistry and a presentation of chemically interesting applications and sophisticated problems. These will form the basis for introducing the relationships between the structure of molecules and their chemical properties and behavior. The subject matter will include principles of atomic structure, chemical bonding, intermolecular interactions and molecular structures of organic and inorganic compounds including some transition metal complexes. Relevant examples will be drawn from such areas as environmental, materials, and biological chemistry. 3 hrs. lec, 2 hrs. rec.",
    units: 10,
    instructors: "Vuocolo, Leonard" 
  });

  Courses.insert({
    courseNum: "18-100",
    title: "Introduction to Electrical and Computer Engineering",
    description: "The goals of this freshman engineering course are: * To introduce basic concepts in electrical and computer engineering in an integrated manner; * To motivate basic concepts in the context of real applications; * To illustrate a logical way of thinking about problems and their solutions, and; * To convey the excitement of the profession. These goals are attained through analysis, construction and testing of an electromechanical system (e.g., a robot) that incorporates concepts from a broad range of areas within Electrical and Computer Engineering. Some of the specific topics that will be covered include system decomposition, ideal and real sources, Kirchhoffs Current and Voltage Laws, Ohms Law, piecewise linear modeling of nonlinear circuit elements, Ideal Op-Amp characteristics, combinational logic circuits, Karnaugh Maps, Flip-Flops, sequential logic circuits, and finite state machines. 3 hrs. lec., 1 hr. rec., 3 hr. lab.",
    units: 12,
    instructors: "Sullivan, Thomas; Carley, L." 
  });

  Courses.insert({
    courseNum: "76-101",
    title: "Interpretation and Argument",
    description: "76-101 introduces first-year students to an advanced, inductive process for writing an argument from sources. Because the course is based upon empirical research about professional academic writers, students will learn expert practices for authoring their own arguments that contribute to an existing community of authors. Because reading and writing are inseparable practices for academic writing, students will read a variety of texts so that they can explore and critically evaluate a single issue from multiple perspectives and from different disciplinary genres. Students will learn methods for summarizing, synthesizing, and analyzing arguments within that issue so that they may contribute an argument of their own. The course is also geared toward helping students understand the requirements of advanced college-level writing. Our students are typically very accomplished readers and writers, and we are eager to push their accomplishments toward greater excellence. For this purpose, students will build upon their composing knowledge by reflecting and thinking strategically as they plan, write, and revise their own texts. Ultimately, they will develop critical reading, rhetorical and linguistic practices for analyzing and producing texts within the context of an academic community. Each section of 76-101 is structured by the same objectives and core assignments. There is a core vocabulary and set of heuristics that all sections teach. However, students may find particular issues more appealing than others-we encourage students to pursue their interests, but we also ask that students engage any 76-101 course with intellectual curiosity. Due to the limits of our schedule, we are unable to meet each students individual preferences for course topics, but we do offer a wide variety from which to choose. Section descriptions are posted at: http://www.cmu.edu/hss/english/first_year/index.html",
    units: 9,
    instructors: "TBA" 
  });

  Courses.insert({
    courseNum: "05-499",
    title: "Special Topics in HCI",
    description: "A: Chinmay Kulkarni - Learning with Peers at Massive Scale D: Jeff Bigham and Jessica Hammer - Twitch Plays Games Design",
    units: 12,
    instructors: "A: Kulkarni, Chinmay; C: Hammer, Jessica; Bigham, Jeffrey" 
  });

  Courses.insert({
    courseNum: "79-201",
    title: "Introduction to Anthropology",
    description: "Cultural anthropologists make the strange familiar and the familiar strange, attempting to understand the internal logic of cultures which might, at first glance, seem bizarre to us, while at the same time probing those aspects of our own society which might appear equally bizarre to outsiders. In doing so, anthropology makes us more aware of our own culturally-ingrained assumptions, while broadening our understanding of the possibilities and alternatives in human experience. This course will use ethnographic writings (descriptive accounts of particular cultures), as well as ethnographic films, to investigate the ways in which diverse societies structure family life, resolve conflict, construct gender relations, organize subsistence, etc. We will assess the advantages and pitfalls of comparing cross-cultural data, analyze the workings of power within and between societies, and consider the politics of cultural representations. We will also discuss the anthropologists relationship to the people s/he studies, and the responsibilities inherent in that relationship. Throughout the course, students will learn the importance of an historical perspective on culture, looking at how and why societies change, and considering how we, as anthropologists, should assess these changes.",
    units: 9,
    instructors: "Alfonso-Wells, Shawn" 
  });

  Courses.insert({
    courseNum: "11-411",
    title: "Natural Language Processing",
    description: "This course will introduce students to the highly interdisciplinary area of Artificial Intelligence known alternately as Natural Language Processing (NLP) and Computational Linguistics. The course aims to cover the techniques used today in software that does useful things with text in human languages like English and Chinese. Applications of NLP include automatic translation between languages, extraction and summarization of information in documents, question answering and dialog systems, and conversational agents. This course will focus on core representations and algorithms, with some time spent on real-world applications. Because modern NLP relies so heavily on Machine Learning, well cover the basics of discrete classification and probabilistic modeling as we go. Good computational linguists also know about Linguistics, so topics in linguistics (phonology, morphology, and syntax) will be covered when fitting. From a software engineering perspective, there will be an emphasis on rapid prototyping, a useful skill in many other areas of Computer Science. In particular, we will introduce some high-level languages (e.g., regular expressions and Dyna) and some scripting languages (e.g., Python and Perl) that can greatly simplify prototype implementation.",
    units: 12,
    instructors: "Black, Alan; Starzl, Ravi" 
  });

}

