#include <iostream>
using namespace std;

int mark[100001] = {0};

int tan_xuat_2(int a[], int n){
	int max_val = -1e9;
	for(int i = 0 ; i < n ; i++ ){
		mark[a[i]] ++;
		if(a[i] > max_val){
			max_val = a[i];
		}
	}
	for(int i = 0 ; i < max_val ; i ++){
		if(mark[i] && mark[i] > 1){
			cout<<i<<" ";
			
		}
	}
}
int main(){
		int a[10000];int n;
	cin>>n;
	for(int i = 0 ; i < n ; i++){
		cin>>a[i];
	}
	tan_xuat_2(a,n);
	return 0;
}
