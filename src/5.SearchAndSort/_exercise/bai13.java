
import java.util.Arrays;
import java.util.Collections;

// [Sắp xếp - Tìm Kiếm]. Bài 13. Xếp gạch

class Solution{
    public static int bai13(Integer[] nums){
        Arrays.sort(nums, Collections.reverseOrder());
        int cnt = 0;
        Integer limit = Integer.MAX_VALUE; 
        for(int i = 0 ; i < nums.length ; i++){
            cnt++;
            limit = Math.min(limit-1, nums[i]);
            if(limit == 0) break;
        }
        return cnt;
    }
    public static void main(String[] args) {
        System.out.println(""+bai13(new Integer[] {1,100,1,1,1,1,1}));
    }
}