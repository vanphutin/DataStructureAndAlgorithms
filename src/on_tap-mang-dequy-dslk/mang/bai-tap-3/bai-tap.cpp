#include <iostream>
using namespace std;

int bai3(int a[],int n){
	int min = 1e9, cnt = 0 ;
	for(int i = 0 ; i < n ; i++ ){
		if(a[i] < min){
			min = a[i];
		}
	}
	for(int i = 0 ; i < n ; i++){
		if( a[i] == min){
			cnt ++;
		}
	}
	return cnt;
}

int main(){
	int n ,a[1000];
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	cout<<bai3(a,n);
	return 0;
}
