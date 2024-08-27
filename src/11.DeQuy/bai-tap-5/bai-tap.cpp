#include <iostream>
using namespace std;

// tinh giai tua
// 5!= 1 * 2 * 3 * 4  * 5


int giaiThua(int n){
	if(n == 1) return 1;
	
	return giaiThua(n-1)*n;
}

int main(){
	int n; cin>>n;
	cout<<giaiThua(n);
	return 0;
}
