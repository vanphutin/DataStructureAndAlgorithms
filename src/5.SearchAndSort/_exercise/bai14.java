
import java.util.Arrays;
import java.util.Collections;

// [Sắp xếp - Tìm Kiếm]. Bài 14. Vắt sữa bò
class Solution{
    public static int bai14(Integer[] nums){
        Arrays.sort(nums, Collections.reverseOrder());
        int sum = 0;
        for(int i = 0 ; i < nums.length ; i++){
            if(nums[i]-1 > 0) sum += nums[i]-1;
        }
        return sum;
    }
    public static void main(String[] args) {
       System.out.println(""+bai14(new Integer[] {4,4,4,4}));
    }
}