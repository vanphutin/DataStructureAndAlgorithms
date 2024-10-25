//tong chu so n
#include <iostream>
using namespace std;

int tongChuSo(int n){
	if(n < 10) return n;
	return n%10 + tongChuSo(n/10);
}

int main(){
	cout<<tongChuSo(12345);
	return 0;
}
