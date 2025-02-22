class Permutations {
    private int n;
    private int[] arr;
    private boolean isFinal = false;

    public Permutations(int n) {
        this.n = n;
        this.arr = new int[n + 1];
        khoiTao();
    }

    // Khởi tạo hoán vị đầu tiên: {1, 2, ..., n}
    private void khoiTao() {
        for (int i = 1; i <= n; i++) {
            arr[i] = i;
        }
    }

    // Sinh hoán vị kế tiếp
    private void hoanVi() {
        while (!isFinal) {
            inHoanVi();

            // Tìm vị trí i sao cho arr[i] < arr[i + 1] từ cuối lên
            int i = n - 1;
            while (i >= 1 && arr[i] > arr[i + 1]) {
                i--;
            }

            if (i == 0) {
                isFinal = true; // Hoán vị cuối cùng, dừng lại
            } else {
                // Tìm j sao cho arr[i] < arr[j]
                int j = n;
                while (arr[i] > arr[j]) {
                    j--;
                }

                // Hoán vị arr[i] và arr[j]
                swap(i, j);

                // Đảo ngược đoạn từ i+1 đến n
                int l = i + 1, r = n;
                while (l < r) {
                    swap(l, r);
                    l++;
                    r--;
                }
            }
        }
    }

    // Hàm hoán đổi 2 phần tử trong mảng
    private void swap(int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // In hoán vị hiện tại
    private void inHoanVi() {
        for (int i = 1; i <= n; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int n = 3; // Đổi giá trị này để test với số khác
        Permutations p = new Permutations(n);
        p.hoanVi();
    }
}
