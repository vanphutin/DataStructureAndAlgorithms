#include <iostream>
using namespace std;

int bai1(int n){
	if(n == 1) return 1;
	return bai1(n-1)+n;
}

int main(){
	int n;cin>>n;
	cout<<bai1(n);
	return 0;
}
