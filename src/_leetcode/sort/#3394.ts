function checkValidCuts(n: number, rectangles: number[][]): boolean {
  // Try both horizontal and vertical cuts
  return checkCuts(rectangles, 0) || checkCuts(rectangles, 1);
}

// Check if valid cuts can be made in a specific dimension
function checkCuts(rectangles: number[][], dim: number): boolean {
  let gapCount = 0;

  // Sort rectangles by their starting coordinate in the given dimension
  rectangles.sort((a, b) => a[dim] - b[dim]);

  // Track the furthest ending coordinate seen so far
  let furthestEnd = rectangles[0][dim + 2];

  for (let i = 1; i < rectangles.length; i++) {
    const rect = rectangles[i];

    // If current rectangle starts after the furthest end we've seen,
    // we found a gap where a cut can be made
    if (furthestEnd <= rect[dim]) {
      gapCount++;
    }

    // Update the furthest ending coordinate
    furthestEnd = Math.max(furthestEnd, rect[dim + 2]);
  }

  // We need at least 2 gaps to create 3 sections
  return gapCount >= 2;
}

// Example usage
console.log(
  checkValidCuts(5, [
    [1, 1, 3, 3],
    [4, 1, 5, 3],
    [1, 4, 5, 5],
  ])
); // true
