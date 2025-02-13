import java.util.PriorityQueue;
// #3066. Minimum Operations to Exceed Threshold Value II
 class Solution {
    public int minOperations(int[] nums, int k) {
        PriorityQueue<Long> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer((long) num); 
        }

        int count = 0;

        while (!minHeap.isEmpty()) {
            long min1 = minHeap.poll();
            if (min1 >= k) {
                break; 
            }

            if (minHeap.isEmpty()) {
                return -1; 
            }

            long min2 = minHeap.poll();
            long newElement = 2 * Math.min(min1, min2) + Math.max(min1, min2);
            minHeap.offer(newElement);
            count++;
        }

        return count;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {72, 94, 72, 18, 20, 80, 97, 1};
        int k = 72;
        System.out.println(solution.minOperations(nums, k)); // Output: 3
    }
}