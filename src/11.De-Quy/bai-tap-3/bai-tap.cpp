#include <iostream>
#include <math.h>

using namespace std;


long long tinhTong(int n){
	if(n <= 1 ) return 1;
	return tinhTong(n-1) + pow(n,3);
}

int main(){
	int n; cin>>n;
	cout<<tinhTong(n);
	return 0;
}
