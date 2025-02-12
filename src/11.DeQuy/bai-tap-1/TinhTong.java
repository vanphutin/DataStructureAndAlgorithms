// [Đệ Quy]. Bài 1. Tính tổng 1.
// Tính tổng hàm S(n) = 1 + 2 + 3 + 4 + .. + n bằng đệ quy. Nếu bạn chưa biết thì
// S(n) có thể tính nhanh bằng công thức S(n) = n * (n + 1) / 2

class Solution{
    public int tinhTong(int n){
        if(n == 1){
             return 1;
        }
        return tinhTong(n-1) + n;
    }
    public static void main(String[] args) {
        Solution rs = new Solution();
        System.out.println(""+rs.tinhTong(773));
    }
}