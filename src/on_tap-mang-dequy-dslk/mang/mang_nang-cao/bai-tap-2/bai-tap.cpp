#include <iostream>
using namespace std;

void bai2(int a[],int n){
	int maxSoFar = a[0];  // The first element is always printed
    cout << maxSoFar << " ";
	for(int i = 1 ; i < n ; i++ ){
		if(a[i] > maxSoFar){
			 cout << a[i] << " ";
			maxSoFar = a[i];
		}
	}
	
}

int main(){
	int a[1000], n;
	cin>>n;
	for(int i = 0 ; i < n ; i++){
		cin>>a[i];
	}
	bai2(a,n);
	return 0;
}
