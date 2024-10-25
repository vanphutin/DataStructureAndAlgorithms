// n giai thua
#include <iostream>
using namespace std;

int nGiaiThua(int n){
	if(n == 1) return 1;
	return nGiaiThua(n -1 )  * n;
}

int main(){
	cout<<nGiaiThua(4);
	return 0;
}
