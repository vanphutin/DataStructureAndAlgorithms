#include <iostream>
using namespace std;

int tongChan(int a[], int n){
	if(n == 0){
		return 0;
	}
	if(a[n -1] % 2 == 0){
		return a[n-1] + tongChan(a,n-1);
	}return tongChan(a,n-1);
}

int main(){
	int a[10001], n;
	cin>>n;
	for(int i = 0 ; i < n ; i++){
		cin>>a[i];
	}
	cout<<tongChan(a,n)<<" ";
	return 0;
}
