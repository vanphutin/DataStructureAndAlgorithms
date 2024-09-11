#include <iostream>
using namespace std;

int mark[1000001];

int find_max(int a[], int n){
	int max = a[0];
	for(int i = 0 ; i < n ; i++){
		if(a[i] > max){
			max = a[i];
		}
	}
	return max;
}

void lietKeGT_khacNhau(int a[],int n){
	int gt_max = find_max(a,n);
	for(int i = 0 ; i < n ; i ++){
		mark[a[i]] = 1;
	}
	for(int i = 0 ; i <= gt_max; i++){
		if(mark[i] == 1){
			cout<<i<<" ";
		}
	}
}

int main(){
	int n, a[1000];
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	lietKeGT_khacNhau(a,n);
	return 0;
}
