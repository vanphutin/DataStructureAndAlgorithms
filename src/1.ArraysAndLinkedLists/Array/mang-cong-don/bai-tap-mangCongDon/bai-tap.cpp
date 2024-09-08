#include <iostream>
using namespace std;

int a[1000], pre[1000];

void mangCongDon(int a[], int n){
	// khoi tao mang pre[]
	pre[0] = a[0];
	
	cout<< pre[0];
	//duyet cac gia tri - start = 1
	for(int i = 1 ; i < n ; i ++){
		pre[i] = pre[i - 1 ] + a[i];
		cout<< " ; " << pre[i];
	}
}

int main(){
	int n ;
	cin >>n;	
	for(int i = 0 ; i < n ; i++){
		cin >> a[i];
	}
	
	mangCongDon(a,n);
	return 0;
}
