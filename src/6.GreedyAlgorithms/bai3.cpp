#include <iostream>
using namespace std;

int bai3(int a[], int n){
	sort(a, a+n);
	int mod = 1e9 + 7;
	long long res = 0;
	for(int i = 0 ; i < n ; i++){
		res += 1 long long * a[i] + i;
		res %= mod;
	}
}

int main(){
}
