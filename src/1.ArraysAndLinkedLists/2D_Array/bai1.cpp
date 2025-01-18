#include <bits/stdc++.h>
#include <math.h>
using namespace std;

bool chk_ngto(int n){
	if(n == 1) return 0;
	for(int i = 2; i <= sqrt(n) ; i++){
		if( n % i == 0){
			return 0;
		}
	}
	return 1;
}

int main(){
	int n, m; cin>>n >> m;
	int a[n][m];
	int max_val = INT_MIN, min_val = INT_MAX;
	
	//nhap
	for(int i = 0 ; i < n ; i++){
		for(int j = 0 ; j < m ; j++){
			cin>>a[i][j];
		}
	}
	
	//xuat
    cout << "Ma tran vua nhap:" << endl;
	for(int i = 0 ; i < n ; i++){
		for(int j = 0 ; j < m ; j++){
			cout<<a[i][j]<<" ";
		}
		cout<<endl;
	}
	
	// in snt
	for(int i = 0 ; i <  n ; i++ ){
		for(int j = 0 ; j < m ; j++){
			if(chk_ngto(a[i][j])){
				cout<<a[i][j]<<" ";
			}
		}
		cout<<endl;
	}

	return 0;
}
