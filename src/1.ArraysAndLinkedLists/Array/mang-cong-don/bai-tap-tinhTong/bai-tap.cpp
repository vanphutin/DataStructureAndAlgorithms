#include <iostream>
using namespace std;

void nhap(int a[], int &n){
	cin >> n;
	for(int i = 0 ; i < n ; i ++){
		cin >> a[i];
	}
}

int tinhTong(int a[], int n, int left, int right){
	long long pre[n];
	 pre[0] = a[0]; 
	for(int i = 1 ; i < n ; i++){
		pre[i] = pre[i - 1] + a[i];
	}
	if(left == 0 ){
		return pre[right];
	}
	return pre[right] - pre[left - 1];
	
}

int main(){
	int a[100000], n, left, right;
	nhap(a,n);
	cout << "nhap left - right\n";
	cin >> left >> right;
	left--;    right--; 
	cout<<tinhTong(a,n,left,right);
	return 0;
}
