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

// ham sap xep mang (tang dan)
void sapXep(int a[],int n){
	int temp = 0;
	for(int i = 0 ; i < n-1 ; i++){
		for(int j = i + 1; j < n ; j++ ){
			if(a[i] > a[j]){
				temp = a[i];
                a[i] = a[j];
                a[j] = temp;
			}
		}
	}
	xuat(a,n);
}
bool BinarySearch(int a[], int n, int x){
	int l = 0 , r = n - 1;
	while(l <= r){
		int m = (l + r ) / 2; 
		if(a[m] == x){
			return true;
		} 
		//thang dung giua nho hon x , thi phai tim kiem ben phai, l = m + 1
		else if(a[m] < x){
			l = m + 1;
		}
		// ... , thi phai tim o ben trai, r = m -1
		else{
			r = m - 1;
		}
	}  
	return false;
}
int main(){
	int a[10001], n;
	cout << "Nhap so luong phan tu trong mang (> 0): ";
    cin >> n;
    nhap(a,n);
    sapXep(a,n);
    int key ; cout <<"\nNhap gia tri can tim : "; cin>>key;
    int index = BinarySearch(a,n,key);
    if (index == true) {
        cout<<"Co "<<key<<" trong mang";
    } else {
        std::cout << "Khong co trong mang !!" << std::endl;
    }
}
