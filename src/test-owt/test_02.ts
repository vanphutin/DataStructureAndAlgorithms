function test_02(input: number) {
  let set = new Set();

  for (let i = 1; i <= input; i++) {
    for (let j = i + 1; j <= input; j++) {
      set.add(i / j);
    }
  }

  console.log(set.size);
}

test_02(1000);
