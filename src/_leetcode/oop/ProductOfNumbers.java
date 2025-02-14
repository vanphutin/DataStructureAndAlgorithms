import java.util.ArrayList;
import java.util.List;
//1352. Product of the Last K Numbers
class ProductOfNumbers { 
    private List<Integer> prefixProducts;

    public ProductOfNumbers() {
        prefixProducts = new ArrayList<>();
        prefixProducts.add(1);  // Giá trị ban đầu để hỗ trợ phép nhân
    }
    
    public void add(int num) {
        if (num == 0) {
            prefixProducts.clear();
            prefixProducts.add(1); // Reset nếu gặp số 0
        } else {
            int lastProduct = prefixProducts.get(prefixProducts.size() - 1);
            prefixProducts.add(lastProduct * num);
        }
    }
    
    public int getProduct(int k) {
        int size = prefixProducts.size();
        if (k >= size) return 0; // Nếu có số 0 trước đó, kết quả chắc chắn là 0
        return prefixProducts.get(size - 1) / prefixProducts.get(size - 1 - k);
    }

    public static void main(String[] args) {
        ProductOfNumbers productOfNumbers = new ProductOfNumbers();
        productOfNumbers.add(3);
        productOfNumbers.add(0);
        productOfNumbers.add(2);
        productOfNumbers.add(5);
        productOfNumbers.add(4);

        System.out.println(productOfNumbers.getProduct(2)); // Output: 20 (5 * 4)
        System.out.println(productOfNumbers.getProduct(3)); // Output: 40 (2 * 5 * 4)
        System.out.println(productOfNumbers.getProduct(4)); // Output: 0 (do có số 0)

        productOfNumbers.add(8);
        System.out.println(productOfNumbers.getProduct(2)); // Output: 32 (4 * 8)
    }
}
