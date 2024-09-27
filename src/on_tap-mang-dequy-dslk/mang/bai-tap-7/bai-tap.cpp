#include <iostream>
#include <algorithm>
using namespace std;



int bai7(int a[],int n){
	sort(a , a + n);
	int digt_min = 1e9;

	for(int i = 0 ; i < n-1 ; i++){
		int diff = a[i + 1] - a[i];
		if(diff < digt_min){
			digt_min = diff;
		}
	}
	return digt_min ;
}

int main(){
	int n ,a[1000],x;
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	
	cout<<bai7(a,n);
	return 0;
}
