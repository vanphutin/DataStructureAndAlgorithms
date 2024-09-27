#include <iostream>
using namespace std;

void bai11(int n){
	if(n > 0){
		bai11(n/2);
		cout<<n%2;
	}
	
}

int main(){
	int n;cin>>n;
	if(n == 0){
		cout<<"0";
	}else{
		bai11(n);
	}
	return 0;
}
