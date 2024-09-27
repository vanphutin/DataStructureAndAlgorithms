#include <iostream>
using namespace std;

int bai2(int n){
	if(n == 1) return 1;
	return bai2(n-1)+n*n;
}

int main(){
	int n;cin>>n;
	cout<<bai2(n);
	return 0;
}
