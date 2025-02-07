// #28
class Solution {
    public static  int strStr(String haystack, String needle) {
    //    int n = haystack.length();
    //    int m = needle.length();

    //    if(m > n) return -1;
    //    for(int i = 0 ; i <= n -m  ; i++){
    //     if(haystack.substring(i,  i + m).equals(needle)){
    //         return i;
    //     }
    //    }
    //    return -1;
    return haystack.indexOf(needle);

    }
    public static void main(String[] args) {
        System.out.println(""+strStr("sadbutsad", "sad"));
    }
}