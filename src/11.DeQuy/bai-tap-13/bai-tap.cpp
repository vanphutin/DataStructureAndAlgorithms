#include <iostream>
using namespace std;
// tinh 123=>6
int tinh(int n){
	if(n < 10) return n;
	return tinh(n/10) + n%10;
}

int main(){
	int n; 
	cin >>n;
	cout<<tinh(n);
	return 0;
}
