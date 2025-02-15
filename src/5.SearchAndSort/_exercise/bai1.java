
import java.util.HashSet;
import java.util.Set;

class Solution{

    public static int bai1(int[] nums){
        Set<Integer> set = new HashSet<>();
        for(int i = 0 ; i < nums.length ; i++){
            set.add(nums[i]);
        }
        return set.size();
    }
    public static void main(String[] args) {
        System.out.println(""+bai1(new int[]{2, 2 ,2 ,1, 3, 2 ,5, 1, 4 ,2}));
    }
}