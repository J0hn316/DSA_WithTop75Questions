// Level Medium
// You are given an array of non-overlapping intervals intervals where intervals[i] = [start, end] represent the start and the end of the ith interval and intervals is sorted in ascending order by start. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by start and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.
// Note that you don't need to modify intervals in-place. You can make a new array and return it.
// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

function insert(intervals, newInterval) {
  let res = [];
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  if (i === intervals.length) {
    res.push(newInterval);
  } else {
    res = res.concat([newInterval]).concat(intervals.slice(i));
  }

  return res;
}

let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];
console.log(insert(intervals, newInterval)); // [[1,5],[6,9]]

function insertInterval(intervals, newInterval) {
  const result = [];
  let i = 0;

  // Add all intervals that come before the newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge intervals that overlap with newInterval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add the merged interval
  result.push(newInterval);

  // Add remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

console.log(insertInterval(intervals, newInterval)); // Output: [[1,5],[6,9]]

// Explanation:
// We initialize an empty array result to store the merged intervals.
// We iterate over the given intervals array to find the correct position to insert the newInterval while merging any overlapping intervals.
// We add all intervals that come before the newInterval (i.e., intervals whose end time is less than the start time of newInterval) to the result array.
// We merge intervals that overlap with the newInterval by updating the start and end times of newInterval accordingly.
// We add the merged newInterval to the result array.
// Finally, we add any remaining intervals from the intervals array to the result array.
// We return the result array, which contains the merged intervals.
