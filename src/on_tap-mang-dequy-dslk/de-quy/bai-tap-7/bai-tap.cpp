#include <iostream>
using namespace std;
int bai6(int n){
	if(n < 2){
		return 0;
	}
	if(n  == 2){
		return 1;
	}
	return bai6(n-1) + bai6(n-2);
}

int main(){
	int n;cin>>n;
	cout<<bai6(n);
	return 0;
}
