// [Sắp xếp - Tìm Kiếm]. Bài 2. Sắp xếp theo trị tuyệt đối
class Solution{
    public static void bai2(int[] nums){
        for(int i = 0 ; i < nums.length; i++){
            for(int j = i+1 ; j<nums.length ;j++){
               if(Math.abs(nums[i]) > Math.abs(nums[j])){
                int temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
               }
            }
        }
    }
    public static void main(String[] args) {
        int[] nums = {3, -7, 2, -5, 10, -1};
        bai2(nums);
        for (int num : nums) {
            System.out.print(num + " ");
        }
    }
}