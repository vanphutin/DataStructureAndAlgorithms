#include <iostream>
using namespace std;

int mark[100001] = {0};

int _max(int a[], int n){
	int init_max = a[0];
	for(int i = 0 ; i < n ; i++ ){
		if(a[i] > init_max){
			init_max = a[i];
		}
	}
	return init_max;
}

void bai8 (int a[], int n){
	for(int i = 0 ; i < n ; i++){
		mark[a[i]] = 1;
	}
	int max_ = _max(a,n);
	for(int i = 0 ; i <= max_ ; i++){
		if(mark[i] == 1){
			cout<<i<<" ";
		}
	}
}


int main(){
	
	int n ,a[1000],x;
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	
	bai8(a,n);
	return 0;
}
