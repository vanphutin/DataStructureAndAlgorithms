
import java.util.Arrays;
import java.util.Collections;

// [Sắp xếp - Tìm Kiếm]. Bài 12. Khiêu vũ

class Solution{
    public static int bai12(Integer[] nums1,Integer[] nums2){
       Arrays.sort(nums1, Collections.reverseOrder());
       Arrays.sort(nums2, Collections.reverseOrder());
        int result = 0;
        int i=0, j=0;
    while(i < nums1.length && j <nums2.length){
         if(nums1[i] > nums2[j]){
            result++;
            i++;
            j++;
         }else {
            j++;
         }
    }
    return  result;
    }
    public static void main(String[] args) {
        Integer[] nums1 = {180, 170, 160, 150};
        Integer[] nums2 = {175, 165, 155, 145};

        int result = bai12(nums1, nums2);
        System.out.println(" " + result);
    }
}