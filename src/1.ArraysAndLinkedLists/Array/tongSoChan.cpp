#include<iostream>
using namespace std;

int Tong(int a[], int n){
	int sum = 0;
	for(int i=0;i < n;i++){
		if(a[i]%2==0){
		sum = sum + a[i];
		}
	}
	return sum;
}

void nhap(int &n, int a[]){
	cin >> n;
	for(int i = 0;i < n; i++){
		cin >> a[i];
	}
}

main(){
	int n, a[n];
	nhap(n,a);
	cout<<Tong(a,n);
}
