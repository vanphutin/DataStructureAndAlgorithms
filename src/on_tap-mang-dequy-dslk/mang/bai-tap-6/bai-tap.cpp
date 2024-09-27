#include <iostream>
using namespace std;

int bai6(int a[],int n, int k){
	int cnt = 0;
	for(int i = 0 ; i < n ; i++){
		for(int j = i + 1; j < n ; j++){
			if(a[i] + a[j] == k){
				cnt ++;
			}
		}
	}
	return cnt ;
}

int main(){
	int n ,a[1000],x;
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	cin>>x;
	cout<<bai6(a,n,x);
	return 0;
}
