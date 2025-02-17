
import java.util.Scanner;

class GenerationBinary{
    int n, 
        isFinal  = 0 ,
        a[] = new int[100];
    
    // ham khoi tao
    public void khoiTao(){
        for(int i =1 ; i <= n ; i++){
            a[i] = 0;
        }
    }

    // thuat toan sinh
    public void sinh(){
        int i = n;
        while(i >= 1 && a[i] == 1){
            a[i] = 0;
            --i;
        }
        if(i == 0){
            isFinal  = 1;
        }else{
            a[i] = 1;
        }
    }

    public static  void main(String[] args) {
        Scanner scanner  = new Scanner(System.in);
        GenerationBinary generationBinary = new GenerationBinary();
        
        System.out.println("nhap n: ");
        int n = scanner.nextInt();
        generationBinary.n = n;
        
        generationBinary.khoiTao();
        while(generationBinary.isFinal  == 0){
            for(int i = 1 ; i <= n ; i++){
                // System.out.print(generationBinary.a[i] == 0 ? 'A':'B');
                System.out.print(generationBinary.a[i] );
            }
            System.out.println();
            generationBinary.sinh();
        }
        
    }
}