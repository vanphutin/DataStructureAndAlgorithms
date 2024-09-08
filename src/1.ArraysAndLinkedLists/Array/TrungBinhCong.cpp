#include<iostream>
#include <iomanip>  

using namespace std;

float TBC(int n,int a[]){
	float sum = 0;
	int dem = 0;
	for(int j = 0; j<n; j++){
		if(a[j] % 2 == 0){
			sum += a[j];
			dem ++;
		}
	}
	return  (float) sum / (float)dem;
}

main(){
	int n;
	cin>>n;
	int a[n];
	for(int i=0;i<n;i++){
		cin >> a[i];
	}
	cout << fixed << setprecision(1	) << TBC(n, a);
}
