#include <iostream>
#include <algorithm>
using namespace std;

int bai3(int a[], int n){
	sort(a, a+n);
	int mod = 1e9 + 7;
	long long res = 0;
	for(int i = 0 ; i < n ; i++){
		res += 1ll * a[i] * i;
		res %= mod;
	}
	return res;
}

int main(){
	int n;
	cin>>n;
	int a[n];
	for(int &x : a) cin>>x;
	cout<<bai3(a,n);
	
	return 0;
}
