
import java.util.Scanner;

class GenerationCombination{
    int isFinal = 0, 
        n,k,
        arr[] = new int[100];

    // ham khoi tao
    public void khoiTao(){
        for(int i = 1 ; i <= k ; i++){
            arr[i] = i;
        }
    }

    // sinh hoan vi
    public void sinhHoanVi(){
        int i = k;
        while(i >= 1 && arr[i] == n - k + i){
            --i;
        }
        if(i == 0){
            isFinal = 1;
        }else{
            arr[i]++;
            for(int j = i+1; j<=k ; j++){
                arr[j] = arr[j-1]+1; 
            }
        }
    }
        public static  void main(String[] args) {
        Scanner scanner  = new Scanner(System.in);
        GenerationCombination generationCombination = new GenerationCombination();
        
        System.out.println("nhap n: ");
        int n = scanner.nextInt();
        generationCombination.n = n;
        
        System.out.println("nhap k: ");
        int k = scanner.nextInt();
        generationCombination.k = k;
        
        generationCombination.khoiTao();
        while(generationCombination.isFinal  == 0){
            for(int i = 1 ; i <= k ; i++){
                System.out.print(generationCombination.arr[i] );
            }
            System.out.println();
            generationCombination.sinhHoanVi();
        }
        
    }
}