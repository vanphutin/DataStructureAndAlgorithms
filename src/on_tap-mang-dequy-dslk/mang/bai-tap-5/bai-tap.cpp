#include <iostream>
using namespace std;

void bai5(int a[], int n){
	for(int i = 0 ; i < n ; i+=2){
		if(a[i] % 2 == 0){
			cout<<a[i]<<" ";
		}
	}
}

int main(){
	int n ,a[1000],x;
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	bai5(a,n);
	return 0;
}
