#include <iostream>
using namespace std;
using ll = long long;
//s(n) = -1 + 2 -3 + 4 - 5 + 6 + ... + (-1)^n * n

int tinhTong(int n){
	if(n == 1 ) return -1;
//	if(n % 2 == 0) return tinhTong(n-1) + (n);
//	return tinhTong(n-1) + (-n);
	return tinhTong(n-1) + ((n % 2 == 0) ? n : (n*-1));
}

int main(){
	int n; cin>>n;
	cout<<tinhTong(n);
	return 0;
}
