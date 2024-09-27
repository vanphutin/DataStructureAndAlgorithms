#include <iostream>
using namespace std;
int bai5(int n){
	if(n == 1){
		return 1;
	}
	return bai5(n-1)*n;
}

int main(){
	int n;cin>>n;
	cout<<bai5(n);
	return 0;
}
