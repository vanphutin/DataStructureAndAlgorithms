#include <iostream>
#include <math.h>
using namespace std;

long long bai3(int n){
	if(n == 1) return 1;
	return bai3(n-1)+n*n*n;
}

int main(){
	int n;cin>>n;
	cout<<bai3(n);
	return 0;
}
