// 57. Insert Interval

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const res: number[][] = [];
  let i = 0;

  // 1. Thêm tất cả intervals nằm trước newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  // 2. Gộp tất cả intervals giao với newInterval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  res.push(newInterval);

  // 3. Thêm tất cả intervals nằm sau newInterval
  while (i < intervals.length) {
    res.push(intervals[i]);
    i++;
  }

  return res;
}
