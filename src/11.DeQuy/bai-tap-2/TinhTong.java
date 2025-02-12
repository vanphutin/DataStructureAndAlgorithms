class Solution{

    public int tinhTong(int n){
        if(n == 1)return 1;
        return tinhTong(n-1)+ (int)Math.pow(n, 2);
    }
    public static void main(String[] args) {
        Solution rs = new Solution();
        System.out.println(""+rs.tinhTong(53));
    }
}