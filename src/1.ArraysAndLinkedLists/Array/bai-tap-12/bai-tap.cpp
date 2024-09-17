#include <iostream>
using namespace std;

void timChiSo(int a[],int n){
	int chi_so_min = 0, chi_so_max=0;
	
	for(int i = 0 ; i < n ; i++){
		if(a[i] > a[chi_so_max]){
			chi_so_max = i;
		}
		if(a[i] < a[chi_so_min]){
			chi_so_min = i;
		}
	}
	cout <<chi_so_max<<" "<<chi_so_min;
}

int main(){
	int n, a[1000];
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	 timChiSo(a,n);
	return 0;
}
