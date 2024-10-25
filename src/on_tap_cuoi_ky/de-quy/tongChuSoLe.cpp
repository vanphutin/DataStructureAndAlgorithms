//tong cac chu so le
#include <iostream>
using namespace std;

int tongChuSoLe(int n){
	if(n == 0) return 0;
	if(n % 2 == 1 ){
		return tongChuSoLe(n/10) + n%10;
	}else{
		return tongChuSoLe(n/10);
	}
}

int main(){
	cout<<tongChuSoLe(12345);
	return 0;
}
