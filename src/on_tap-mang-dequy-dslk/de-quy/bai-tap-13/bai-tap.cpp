#include <iostream>
using namespace std;

int bai13(int n){
	if(n < 10){
		return n;
	}
	return bai13(n/10) + n%10;
}

int main(){
	int n;
    cin >> n;
    cout<<bai13(n);
	return 0;
}
