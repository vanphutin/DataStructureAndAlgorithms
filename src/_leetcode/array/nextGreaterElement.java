
import java.util.Arrays;

class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] ans = new int[nums1.length];
        for(int i = 0 ; i < nums1.length ; i++){
            int num = nums1[i];
            int j=0;
            while(j < nums2.length && nums2[j] != num){
                j++;
            }
            
            int nextGreater = -1;
            for(int k = j+1 ; k < nums2.length ; k++){
                if(nums2[k] > num){
                    nextGreater = nums2[k];
                    break;
                }
            }
            
            ans[i] = nextGreater;
        }
        return ans;
    }
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums1 = {4, 1, 2};
        int[] nums2 = {1, 3, 4, 2};
        int[] result = solution.nextGreaterElement(nums1, nums2);
        System.out.println(Arrays.toString(result)); 
    }
}