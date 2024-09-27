#include <iostream>
using namespace std;

int bai15(int n){

	if(n < 10 ) return n;
	return bai15(n/10);
}

int main(){
	int n;
    cin >> n;
    cout<<bai15(n);
	return 0;
}
