#include <iostream>
using namespace std;

int bai11(int n){
	if(n == 0) return 0;
	return bai11(n/2)*10 + n%2 ;
}

int main(){
	int n;cin>>n;
	cout<<bai11(n);
	return 0;
}
