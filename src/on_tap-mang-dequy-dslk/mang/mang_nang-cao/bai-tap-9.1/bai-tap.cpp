#include <iostream>
using namespace std;

int mark[100001] = {0};

void tan_xuat(int a[],int n){
	for(int i = 0 ; i < n ; i++){
		if(mark[a[i]] == 0){
			cout<<a[i]<<" ";
			mark[a[i]] = 1;
		}
	}
}

int main(){
	int a[10000];int n;
	cin>>n;
	for(int i = 0 ; i < n ; i++){
		cin>>a[i];
	}
	tan_xuat(a,n);
	return 0;
}
