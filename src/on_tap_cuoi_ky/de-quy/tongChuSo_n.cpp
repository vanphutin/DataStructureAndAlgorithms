// tong cac so tu 1 den n
#include <iostream>
using namespace std;

int tong1DenN(int n){
	if(n == 1) return 1;
	return tong1DenN(n-1)  + n;
}

int main(){
	cout<<tong1DenN(5);
	return 0;
}
