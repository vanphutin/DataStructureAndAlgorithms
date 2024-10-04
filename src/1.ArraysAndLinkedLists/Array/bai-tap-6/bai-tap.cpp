#include <iostream>
using namespace std;

int inCapSo1(int a[],int n,int k){
	int danhDau = 0;
	for(int i = 0 ; i < n ; i++){
		for(int j = i + 1 ; j < n ; j++){
			if(a[i] + a[j] == k){
				danhDau ++;
			}
		}
	}
	return danhDau;
}

int main(){
	int n, a[1000],k;
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	cin>>k;
	cout<<inCapSo1(a,n,k);
	return 0;
}
