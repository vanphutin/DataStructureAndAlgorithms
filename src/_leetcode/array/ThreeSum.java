
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class ThreeSum {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>>result = new ArrayList<>();
        Arrays.sort(nums);
        for(int i = 0 ; i < nums.length-2 ; i++){
           if (i > 0 && nums[i] == nums[i - 1]) continue;

           int left = i + 1;
            int right = nums.length - 1;
            while (left < right) { 
                int sum = nums[i] + nums[left] + nums[right];
                if(sum == 0){
                   result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;right--;
                }else if(sum > 0){
                    right--;
                }else{
                    left ++;
                }
            }
        }
        return result;

    }
    public static void main(String[] args) {
        ThreeSum solution = new ThreeSum();
        int[] nums = {-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6};
        List<List<Integer>> result = solution.threeSum(nums);
        System.out.println(result);
    }
}