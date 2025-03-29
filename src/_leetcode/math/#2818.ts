function maximumScore(nums: number[], k: number): number {
  const MOD: number = 1_000_000_007;
  const n: number = nums.length;
  const primeScores: number[] = new Array(n).fill(0);

  // Find the maximum element in nums
  const maxElement: number = Math.max(...nums);

  // Get all prime numbers up to maxElement
  const primes: number[] = getPrimes(maxElement);

  // Calculate prime score for each number
  for (let index = 0; index < n; index++) {
    let num = nums[index];

    for (const prime of primes) {
      if (prime * prime > num) break;
      if (num % prime !== 0) continue;

      primeScores[index]++;
      while (num % prime === 0) num = Math.floor(num / prime);
    }

    if (num > 1) primeScores[index]++;
  }

  // Initialize next and previous dominant index arrays
  const nextDominant: number[] = new Array(n).fill(n);
  const prevDominant: number[] = new Array(n).fill(-1);
  const decreasingPrimeScoreStack: number[] = [];

  // Calculate next and previous dominant indices
  for (let index = 0; index < n; index++) {
    while (
      decreasingPrimeScoreStack.length > 0 &&
      primeScores[
        decreasingPrimeScoreStack[decreasingPrimeScoreStack.length - 1]
      ] < primeScores[index]
    ) {
      const topIndex = decreasingPrimeScoreStack.pop()!;
      nextDominant[topIndex] = index;
    }

    if (decreasingPrimeScoreStack.length > 0) {
      prevDominant[index] =
        decreasingPrimeScoreStack[decreasingPrimeScoreStack.length - 1];
    }

    decreasingPrimeScoreStack.push(index);
  }

  // Calculate number of subarrays for each element
  const numOfSubarrays: bigint[] = new Array(n);
  for (let index = 0; index < n; index++) {
    numOfSubarrays[index] =
      BigInt(nextDominant[index] - index) * BigInt(index - prevDominant[index]);
  }

  // Sort elements in descending order
  const sortedArray: [number, number][] = nums
    .map((num, index) => [num, index] as [number, number])
    .sort((a, b) => b[0] - a[0]);

  let score: number = 1;
  let processingIndex: number = 0;

  // Process elements while operations remain
  while (k > 0) {
    const [num, index] = sortedArray[processingIndex++];

    // Calculate operations to apply
    const operations = Math.min(k, Number(numOfSubarrays[index]));

    // Update score
    score = Number(
      (BigInt(score) * power(BigInt(num), BigInt(operations))) % BigInt(MOD)
    );

    // Reduce remaining operations
    k -= operations;
  }

  return score;
}

// Helper function to compute power modulo MOD
function power(base: bigint, exponent: bigint): bigint {
  let res: bigint = BigInt(1);
  let b: bigint = base;

  while (exponent > 0) {
    if (exponent % BigInt(2) === BigInt(1)) {
      res = (res * b) % BigInt(1_000_000_007);
    }
    b = (b * b) % BigInt(1_000_000_007);
    exponent = exponent / BigInt(2);
  }

  return res;
}

// Function to generate prime numbers using Sieve of Eratosthenes
function getPrimes(limit: number): number[] {
  const isPrime: boolean[] = new Array(limit + 1).fill(true);
  const primes: number[] = [];

  for (let number = 2; number <= limit; number++) {
    if (!isPrime[number]) continue;

    primes.push(number);

    for (
      let multiple = number * number;
      multiple <= limit;
      multiple += number
    ) {
      isPrime[multiple] = false;
    }
  }

  return primes;
}
