
import java.util.Arrays;

class Solution {
    //Chúng tôi định nghĩa một mảng hài hòa là một mảng mà sự khác biệt giữa giá trị cực đại và giá trị cực tiểu của nó chính xác là 1.

    public int findLHS(int[] nums) {
        Arrays.sort(nums);
        int _max = 0;
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            while (nums[i] - nums[j] > 1) {
                j++;
            }
            if (nums[i] - nums[j] == 1) {
                _max = Math.max(_max, i - j + 1);
            }
        }
        return _max;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Longest Harmonious Subsequence: " + solution.findLHS(new int[]{1, 3, 2, 2, 5, 2, 3, 7}));
    }
}
