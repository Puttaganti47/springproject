const works = {
  task1: {
    title: "Task 1",
    url: "works/task1/index.html",
    description: "Expectation document",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "January 14, 2025",
    category: "Web Development",
  },
  task2: {
    title: "Task 2",
    url: "works/task2/index.html",
    description: "custom designed page",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "January 16, 2025",
    category: "Web Development",
  },
  task3: {
    title: "Task 3",
    url: "works/task3/index.html",
    description: "CSS HOVER",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "January 28, 2025",
    category: "Web Development",
  },
  // task4: {
  //   title: "Task 4",
  //   url: "works/task4/index.html",
  //   description: "custom dashboard",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   date: "January 28, 2025",
  //   category: "Web Development",
  // },
  task5: {
    title: "Task 5",
    url: "works/task5/index.html",
    description: "Alert Message",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "January 30, 2025",
    category: "Web Development",
  },
  task6: {
    title: "Task 6",
    url: "works/task6/index.html",
    description: "Arthematic Operations",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "February 7, 2025",
    category: "Web Development",
  },
  task7: {
    title: "Task 7",
    url: "works/task7/index.html",
    description: "Inspect screen",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "February 4, 2025",
    category: "Web Development",
  },
  task8: {
    title: "Task 8",
    url: "works/task8/index.html",
    description: "Upper case output",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "February 4, 2025",
    category: "Web Development",
  },
  task9: {
    title: "Task 9",
    url: "works/task9/index.html",
    description: "Grade Calculator",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "February 6, 2025",
    category: "Web Development",
  },
  task10: {
    title: "Task 10",
    url: "works/task10/index.html",
    description: "Task call stack",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "February 6, 2025",
    category: "Web Development",
  },
  task11: {
    title: "Task 11",
    url: "works/task11/index.html",
    description: "Enter value to print stars",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "February 11, 2025",
    category: "Web Development",
  },
  task12: {
    title: "Task 12",
    url: "works/task12/index.html",
    description: "update info show info",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "February 13, 2025",
    category: "Web Development",
  },
  task13: {
    title: "Task 13",
    url: "works/task13/index.html",
    description: "show student information",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "February 18, 2025",
    category: "Web Development",
  },
  task14: {
    title: "Task 14",
    url: "works/task14/index.html",
    description: "Generate Random Value",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "February 20, 2025",
    category: "Web Development",
  },
};

// Select the body and create a navigation panel
const body = document.body;

const navPanel = document.createElement("div");
navPanel.className = "nav_panel"; 

// Select the header and insert the navigation panel below it
const header = document.querySelector(".header_div");
header.insertAdjacentElement("afterend", navPanel);


// Generate buttons dynamically for each work
Object.keys(works).forEach((key) => {
  const btn = document.createElement("button");
  btn.textContent = works[key].title;
  btn.className = "nav_button"; 

  // On click, update the iframe src
  btn.addEventListener("click", () => {
    document.getElementById("content_frame").src = works[key].url;
    document.getElementById("task_title").textContent = works[key].description;
    document.getElementById("task_technologies").textContent =
      works[key].technologies.join(", ");
    document.getElementById("task_date").textContent = works[key].date;
  });

  navPanel.appendChild(btn);
});
