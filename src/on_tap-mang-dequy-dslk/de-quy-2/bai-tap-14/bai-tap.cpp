#include <iostream>
using namespace std;

int bai14(int n){
	if(n < 10){
		return n;
	}
	return bai14(n / 10);
}

int main(){
	int n; cin>>n;
	cout<<bai14(n);
	return 0;
}
