function countDays(days: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [];
  for (let [start, end] of meetings) {
    if (merged.length === 0 || merged[merged.length - 1][1] < start) {
      merged.push([start, end]);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        end
      );
    }
  }
  let meetingDays = 0;
  for (let [start, end] of merged) {
    meetingDays += end - start + 1;
  }
  return days - meetingDays;
}
