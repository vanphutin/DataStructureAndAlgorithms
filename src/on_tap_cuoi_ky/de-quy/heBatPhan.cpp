// chuyen sang he bat phan

#include <iostream>
using namespace std;

void heBacPhan(int n){
	if(n > 0){
		heBacPhan(n/8);
		cout<<n%8;
	}
}

int heBatPhan_1(int n){
	if(n == 0 ) return 0;
	return n % 8 + 10*heBatPhan_1(n/8);
}
main(){
	int n ;
	cout<<heBatPhan_1(96)<<endl;
	heBacPhan(96);
	
	
}
