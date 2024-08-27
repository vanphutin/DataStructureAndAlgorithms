#include <iostream>
#include <math.h>
using namespace std;

//Bai tap 2

//s(1) = 1^2
//s(2) = 1^2 + 2^2
//		= s(1) + 2^2
//s(3) = 1^2 + 2^2 + 3^2
//			s(2)   + 3^2
// S(N) = S(N-1) + N^2;

int tinhTong1(int n){
	if(n <= 1 ) return 1;
	return tinhTong1(n-1) + pow(n,2);
}

int main(){
	int n; cin>>n;
	cout<<tinhTong1(n);
	return 0;
}
