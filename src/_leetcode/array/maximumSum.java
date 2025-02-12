
import java.util.HashMap;
import java.util.Map;

// // // #2342. Max Sum of a Pair With Equal Sum of Digits
class Solution {

    public int getDigitSum(int n){
        if(n == 0) return 0;
        return getDigitSum((int)Math.floor(n/10))+n % 10;
    }

    public int maximumSum(int[] nums) {
        int maxSum  = -1;
        Map<Integer, Integer> map = new HashMap<Integer,Integer>();

        for(int num : nums){
            int digitSum = getDigitSum(num);

            if(map.containsKey(digitSum)){
                maxSum = Math.max(maxSum, map.get(digitSum)+num);
                map.put(digitSum, Math.max(map.get(digitSum), num));
            }else{
                map.put(digitSum, num);
            }
        }
        return maxSum;

    }
    public static void main(String[] args) {
        Solution rs = new Solution();
        System.out.println(""+rs.maximumSum(new int[] {7, 1, 0, 5, 2, 4}));
    }
}