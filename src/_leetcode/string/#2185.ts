function prefixCount(words: string[], pref: string): number {
  let cnt: number = 0;
  let prefix = "";
  for (const word of words) {
    if (word.slice(0, pref.length) === pref) {
      cnt++;
    }
  }
  return cnt;
}

// function prefixCount(words: string[], pref: string): number {
//     let count = 0;
//     for(const word of words){
//         if(word.startsWith(pref)) count++
//     }
//     return count;
// };
console.log(
  prefixCount(
    ["lewsmb", "lewrydnve", "lewqqm", "lewec", "lewn", "lewb", "lewedb"],
    "lew"
  )
);
