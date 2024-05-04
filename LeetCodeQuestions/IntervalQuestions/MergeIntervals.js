// Level Medium
// Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Example:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

function merge(intervals) {
  if (intervals.length === 0 || intervals.length == 1) return intervals;

  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let last = result[result.length - 1];

    if (last[1] < intervals[i][0]) {
      result.push(intervals[i]);
    } else {
      last[1] = Math.max(last[1], intervals[i][1]);
    }
  }

  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
// [[1,6],[8,10],[15,18]]

function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  // Sort intervals based on start times
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Merge overlapping intervals
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      // Add non-overlapping interval
      mergedIntervals.push(currentInterval);
    }
  }
  return mergedIntervals;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals)); // Output: [[1,6],[8,10],[15,18]]
