#include <iostream>
#include <vector>

using namespace std;
//O(n)

// ham nhap mang
void nhap(int a[], int n) {
    cout << "Nhap cac phan tu cua mang:\n";
    for(int i = 0; i < n; i++) {
        cout << "Nhap phan tu thu " << i << ": ";
        cin >> a[i];
    }
}

//ham xuat mang
void xuat(int a[],int n){
	cout <<"\nCac phan tu trong mang la: ";
	for(int i = 0 ; i< n ; i++){
		cout<<a[i]<<" ";
	}
}
//ham tim kiem : tim kiem tuyen tinh
int linearSearch(int a[], int n, int key) {
    for(int i = 0 ; i <= n ; i++){
    	if(a[i] == key){
    		return i;
		}
	}
	return -1;
}
int main() {
    int a[1001], n;
    cout << "Nhap so luong phan tu trong mang (> 0): ";
    cin >> n;
    nhap(a,n);
    xuat(a,n);
    int key ; cout <<"\nNhap gia tri can tim : "; cin>>key;
    int index = linearSearch(a, n, key);
    if (index != -1) {
        std::cout << "Vi tri can tim la: " << index << std::endl;
    } else {
        std::cout << "Khong co vi tri nao !!" << std::endl;
    }
    return 0;
}

