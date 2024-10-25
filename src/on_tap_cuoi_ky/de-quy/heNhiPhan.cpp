// chuyen sang he nhi phan

#include <iostream>
using namespace std;

int heNhiPhan(int n){
	if(n == 0) return 0;
	return heNhiPhan(n/2)*10 + n%2;
}

void heNhiPhan_1(int n){
	if(n > 0){
		heNhiPhan_1(n / 2 );
		cout<<n % 2;
	}
}

main(){
	int n ;;
	cout<<heNhiPhan(9)<<endl;
	
}
