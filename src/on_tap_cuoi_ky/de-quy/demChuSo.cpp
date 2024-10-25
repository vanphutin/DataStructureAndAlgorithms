//dem chu so n
#include <iostream>
using namespace std;

int demChuSo(int n){
	if(n < 10) return 1;
	return 1 + demChuSo(n/10);
}

int main(){
	cout<<demChuSo(12345);
	return 0;
}
