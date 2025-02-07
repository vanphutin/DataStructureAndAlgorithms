class Solution {
    public static int searchInsert(int[] nums, int target) {
        int i = 0, j = nums.length - 1;

        while (i <= j) { 
            int mid = (i + j) / 2; 

            if (nums[mid] == target) {
                return mid;
            } else if (target < nums[mid]) {
                j = mid - 1; // ✅ Giảm j thay vì i
            } else {
                i = mid + 1; // ✅ Tăng i thay vì j
            }
        }
        
        return i; // ✅ i là vị trí cần chèn nếu không tìm thấy
    }

    public static void main(String[] args) {
        System.out.println(searchInsert(new int[]{1, 3, 5, 6}, 2));
    }
}
