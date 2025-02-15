//2698. Find the Punishment Number of an Integer

class Solution {
    public int punishmentNumber(int n) {
         int total = 0;
        for (int i = 1; i <= n; i++) {
            int squared = i * i;
            if (canPartition(String.valueOf(squared), i, 0, 0)) {
                total += squared;
            }
        }
        return total;
    }
     private static boolean canPartition(String s, int target, int index, int currentSum) {
        // Nếu tổng vượt quá target thì dừng ngay
        if (currentSum > target) return false;
        // Nếu đã duyệt hết chuỗi và tổng bằng target thì hợp lệ
        if (index == s.length()) return currentSum == target;

        // Duyệt qua tất cả cách cắt từ index đến cuối chuỗi
        for (int end = index + 1; end <= s.length(); end++) {
            int part = Integer.parseInt(s.substring(index, end)); // Cắt một phần từ index đến end
            if (canPartition(s, target, end, currentSum + part)) {
                return true; // Nếu tìm thấy cách hợp lệ, trả về true
            }
        }
        return false; // Không tìm được cách chia hợp lệ
    }
}