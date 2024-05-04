// Medium
// Given an array of intervals intervals where intervals[i] = [start, end], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1

function easeOverLapIntervals(intervals) {
  // No intervals or only one interval, no overlap
  if (intervals.length <= 1) return 0;

  // Sort intervals by end times
  intervals.sort((a, b) => a[1] - b[1]);

  let removals = 0;
  let lastEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const currentStart = intervals[i][0];
    const currentEnd = intervals[i][1];

    if (currentStart < lastEnd) {
      // Overlapping intervals found
      removals++;
      // Choose the interval with smaller end time to remove
      lastEnd = Math.min(lastEnd, currentEnd);
    } else {
      // No overlap, update lastEnd
      lastEnd = currentEnd;
    }
  }
  return removals;
}
const intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
const intervals1 = [
  [1, 2],
  [1, 2],
  [1, 2],
];
const intervals2 = [
  [1, 2],
  [2, 3],
];
console.log(easeOverLapIntervals(intervals)); // Output: 1
console.log(easeOverLapIntervals(intervals1)); // Output: 2
console.log(easeOverLapIntervals(intervals2)); // Output: 0
