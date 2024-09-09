#include <iostream>
#include <cmath>
using namespace std;

bool soNguyenTo(int n){
	if(n < 2) return false;
	for(int i = 2 ; i <= sqrt(n) ; i ++){
		if(n % i == 0){
			return false;
		}
	}
	return true;
}

int tinhTongSNT(int a[],int n){
	int tong = 0;
	for(int i = 0 ; i < n ; i++){
		if(soNguyenTo(a[i])){
			tong += a[i];
		}
	}
	return tong;
}

int main(){
	int a[10000], n;
	cin>>n;
	for(int i = 0 ; i < n ; i++){
		cin>>a[i];
	}
	cout<<tinhTongSNT(a,n);
	return 0;
}
