#include <iostream>
using namespace std;

bool bai1(int a[],int n){
	for(int i = 0 ; i < n ; i++){
		if(a[i] >= a[i + 1]){
			return false;
		}
	}
	return true;
}

int main(){
	int a[1000], n;
	cin>>n;
	for(int i = 0 ; i < n ; i++){
		cin>>a[i];
	}
	if(bai1(a,n) == true){
		cout<<"YES";
	}else{
		cout<<"NO";
	}
	return 0;
}
