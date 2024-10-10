#include <iostream>
using namespace std;
void bai11(int n){
	if(n > 0){
		bai11(n/2);
		cout<<n%2;
	}
}

int main(){
	int a;
	cin>>a;
	if(a <= 0){
		cout<<"0";
	}
	bai11(a);
	return 0;
}
