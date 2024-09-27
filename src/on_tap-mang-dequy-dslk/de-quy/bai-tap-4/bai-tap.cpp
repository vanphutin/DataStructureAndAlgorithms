#include <iostream>
using namespace std;

int bai4(int n){
	if(n == 1) return -1;
	
	if(n % 2 == 0){
		return bai4(n-1) + n;
	}
	return bai4(n-1)-n;
}

int main(){
	int n;cin>>n;
	cout<<bai4(n);
	return 0;
}
