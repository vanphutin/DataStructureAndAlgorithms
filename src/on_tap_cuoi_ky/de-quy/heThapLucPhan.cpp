// chuyen sang he thap luc  phan

#include <iostream>
using namespace std;

int heThapLucPhan(int n){
	if(n == 0) return 0;
	return n%16  + 100*heThapLucPhan(n/16);
}

int main(){
	cout<<heThapLucPhan(33);
	return 0;
}
