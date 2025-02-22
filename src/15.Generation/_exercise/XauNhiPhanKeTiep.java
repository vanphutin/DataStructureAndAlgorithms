import java.util.Scanner;

class XauNhiPhanKeTiep {
    private char[] arr;

    // Constructor khởi tạo từ chuỗi đầu vào
    public XauNhiPhanKeTiep(String s) {
        this.arr = s.toCharArray();
    }

    // Sinh xâu nhị phân kế tiếp
    public void sinh() {
        int i = arr.length - 1;
        while (i >= 0 && arr[i] == '1') { 
            arr[i] = '0'; // Đổi tất cả '1' thành '0'
            --i;
        }
        if (i >= 0) {
            arr[i] = '1'; // Đổi '0' đầu tiên gặp thành '1'
        }
    }

    // In kết quả
    public void printResult() {
        System.out.println(new String(arr));
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine(); // Nhập xâu nhị phân từ bàn phím
        scanner.close();

        XauNhiPhanKeTiep p = new XauNhiPhanKeTiep(input);
        p.sinh(); // Sinh xâu kế tiếp
        p.printResult(); // In kết quả
    }
}
