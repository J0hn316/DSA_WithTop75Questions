// Level: Medium
//There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
//You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
//For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
//Return true if you can finish all courses. Otherwise, return false.

const canFinishCourses = (numCourses, prerequisites) => {
  // Initialize adjacency list representation of the graph
  const graph = new Array(numCourses).fill(0).map(() => []);

  // Array to store the in-degree of each course
  const inDegree = new Array(numCourses).fill(0);

  // Build the graph and calculate the in-degree of each course
  for (const [course, prereq] of prerequisites) {
    // Add the edge from prereq to course
    graph[prereq].push(course);
    // Increment the in-degree of the course
    inDegree[course]++;
  }

  // Queue for topological sorting
  const queue = [];

  // Add courses with in-degree 0 to the queue
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  // Counter to keep track of completed courses
  let count = 0;

  // Perform topological sorting
  while (queue.length) {
    // Dequeue a course
    const course = queue.shift();
    count++;

    // Iterate through the courses that depend on the completed course
    for (const dependentCourse of graph[course]) {
      // Reduce the in-degree of the dependent course by one
      inDegree[dependentCourse]--;

      // If the in-degree becomes 0, add the dependent course to the queue
      if (inDegree[dependentCourse] === 0) queue.push(dependentCourse);
    }
  }
  // If count is equal to the total number of courses, all courses can be finished
  return count === numCourses;
};

const numCourses = 4;
const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

console.log(canFinishCourses(numCourses, prerequisites)); // output:  true

// In this code:

// We initialize an array graph to represent the directed graph and another array indegree to store the indegree of each course.
// We build the graph based on the prerequisites provided.
// We use a queue for topological sorting, starting with courses having an indegree of 0.
// We iterate through the queue, removing courses and decrementing the indegree of dependent courses.
// If a course's indegree becomes 0 after decrementing, we add it to the queue.
// Finally, we check if the count of completed courses equals the total number of courses to determine if all courses can be finished.
