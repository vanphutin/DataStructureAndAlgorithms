#include <iostream>
using namespace std;

int bai14(int n){

	if(n < 10 ) return 1;
	return bai14(n/10) + 1;
}

int main(){
	int n;
    cin >> n;
    cout<<bai14(n);
	return 0;
}
