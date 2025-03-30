function partitionLabels(s: string): number[] {
  let lastOccurrence: number[] = new Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    lastOccurrence[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  let partitionEnd = 0,
    partitionStart = 0;
  let partitionSizes: number[] = [];

  for (let i = 0; i < s.length; i++) {
    partitionEnd = Math.max(
      partitionEnd,
      lastOccurrence[s.charCodeAt(i) - "a".charCodeAt(0)]
    );

    if (i === partitionEnd) {
      partitionSizes.push(i - partitionStart + 1);
      partitionStart = i + 1;
    }
  }

  return partitionSizes;
}

console.log(partitionLabels("ababcbacadefegdehijhklij"));
