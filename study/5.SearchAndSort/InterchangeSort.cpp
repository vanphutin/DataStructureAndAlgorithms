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


void InterchangeSort(int a[],int n){
	int temp = 0;

	for(int i = 0 ; i < n ; i++){
		for(int j = i + 1 ; j < n ; j++){
			if(a[i] > a[j]){
				//hoan doi vi tri cac phan tu
				temp = a[i];
				a[i] = a[j];
				a[j] = temp;
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
    InterchangeSort(a,n);
	
}
