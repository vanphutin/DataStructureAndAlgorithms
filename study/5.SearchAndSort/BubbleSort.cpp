#include <iostream>
#include <vector>

using namespace std;
//O(n^2)

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

void BubbleSort(int a[], int n){
	int temp = 0;
	for(int i = 0 ; i < n - 1 ; i++){
		for(int j = n - 1; j > i ; j--){
			if(a[j] < a[j-1]){
				temp = a[j];
				a[j] = a[j-1];
				a[j-1] = temp;
			}
		}
	}
	xuat(a,n);
}

int main(){
	int a[10001], n;
	cout << "Nhap so luong phan tu trong mang : ";
    cin >> n;
    nhap(a,n);
	BubbleSort(a,n);
}
