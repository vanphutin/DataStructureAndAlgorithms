#include <iostream>

using namespace std;

void nhap_mang(int a[], int &n){
    cout<<"Nhap sl p.tu: "; 
    cin>>n;
    for(int i = 0 ; i < n ; i++){
        cin>>a[i];
    }
}

void xuat_mang(int a[], int n){
    cout<<"Xuat mang:\n";
    for(int i = 0 ; i < n ; i++){
        cout<<a[i]<<" ";
    }
}

void bubble_sort(int a[], int n){
	int i,j;
	for(i = 0 ; i < n ; i++){
		for(j = n - 1 ; j > i ; j--){
			if(a[j] < a[j - 1]){
				swap(a[j],a[j-1]);
			}
		}
	}
	xuat_mang(a,n);
}

int main(){
    int a[100001], n;
    nhap_mang(a, n);
    bubble_sort(a, n);
    return 0;
}

