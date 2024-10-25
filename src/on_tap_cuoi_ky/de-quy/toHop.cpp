// to hop chap k n 
#include <iostream>
using namespace std;

int toHop(int n, int k){
	if(k == 0 || k == n) return 1;
	return toHop(n-1,k-1) + toHop(n-1,k);
}
main(){
	int n ;;
	cout<<toHop(6,3);
}
