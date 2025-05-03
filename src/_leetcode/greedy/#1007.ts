function minDominoRotations(tops: number[], bottoms: number[]): number {
  const getRotation = (
    tops: number[],
    bottoms: number[],
    target: number
  ): number => {
    let rotateTop = 0;
    let rotateBottom = 0;

    for (let i = 0; i < tops.length; i++) {
      if (tops[i] !== target && bottoms[i] !== target) {
        return Number.MAX_SAFE_INTEGER;
      }
      if (tops[i] !== target) rotateTop++;
      if (bottoms[i] !== target) rotateBottom++;
    }
    return Math.min(rotateTop, rotateBottom);
  };

  let res = getRotation(tops, bottoms, tops[0]);
  if (tops[0] !== bottoms[0]) {
    res = Math.min(res, getRotation(tops, bottoms, bottoms[0]));
  }
  return res === Number.MAX_SAFE_INTEGER ? -1 : res;
}
