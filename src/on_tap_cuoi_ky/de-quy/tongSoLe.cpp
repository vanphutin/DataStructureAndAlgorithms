//tong  so le
#include <iostream>
using namespace std;

int tongSoLe(int n){
	if(n == 0) return 0;
	if(n % 2 == 1 ){
		return tongSoLe(n-2) + n;
	}else{
		return tongSoLe(n/10);
	}
}

int main(){
	cout<<tongSoLe(9);
	return 0;
}
