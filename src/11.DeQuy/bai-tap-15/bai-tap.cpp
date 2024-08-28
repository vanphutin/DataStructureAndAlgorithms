#include <iostream>
using namespace std;

//4342342 => 4 (chu so dau tien)
//32542 -> 3
int tim(int n){
	if(n < 10) return n;
	return tim(n/10) ;
}
int main(){
	int n; 
	cin >>n;
	cout<<tim(n);
	return 0;
}
