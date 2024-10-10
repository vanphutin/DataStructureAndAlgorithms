#include <iostream>
using namespace std;

int bai13(int n){
	if(n == 0){
		return 0;
	}
	return 1 + bai13(n / 10);
}

int main(){
	int n; cin>>n;
	cout<<bai13(n);
	return 0;
}
