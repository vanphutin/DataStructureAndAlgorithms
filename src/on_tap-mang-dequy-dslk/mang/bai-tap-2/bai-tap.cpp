#include <iostream>
#include <math.h>
using namespace std;

bool ng_to(int n){
	if(n < 2) return false;
	for(int i = 2 ; i < (n); i++){
		if(n % i == 0){
			return false;
		}
	}
	return true;
}

float bai2(int a[], int n){
	int cnt = 0, sum = 0 ;
	for(int i = 0 ; i < n ; i++){
		if(ng_to(a[i])){
			cnt ++;
			sum += a[i];
		}
	}
	return (float)sum/cnt;
}

int main(){
	int n ,a[1000];
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	cout<<bai2(a,n);
	return 0;
}
