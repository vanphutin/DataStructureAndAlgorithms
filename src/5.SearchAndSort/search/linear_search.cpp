#include <iostream>

using namespace std;

bool linear_search(int a[], int n, int k){
	if(a[0] == k || a[n-1] == k) return 1;
	for(int i = 1; i < n -1 ; i++){
		if(a[i] == k ){
			return 1;
		}
	}
	return 0;
}

main(){
	int a[10001], n,k;
	cout<<"nhap sl pt: ";cin>>n;
	for(int i = 0 ; i < n ; i++){
		cin>>a[i];
	}
	cout<<"nhap k "; cin>>k;
	if(linear_search(a,n,k) == 1){
		cout<<"Yes";
	}else{
		cout<<"No";
	}

}
