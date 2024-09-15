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

void interchange_sort(int a[],int n){
	int i,j ;
	for(i = 0 ; i < n ; i++){
		for(j = i + 1 ; j < n ; j++){
			if(a[j] < a[i]){
				swap(a[i],a[j]);
			}
		}
	}
	xuat_mang(a,n);

}

int main(){
    int a[100001], n;
    nhap_mang(a, n);
    insertion_sort(a,n);
    return 0;
}

