#include <iostream>
using namespace std;

void bai4(int a[],int n, int x){
	int s_l = 0, s_b = 0;
	for(int i = 0 ; i < n ; i++){
		if(a[i] >= x){
			s_l ++;
		}else{
			s_b ++;
		}
	}
	cout<<s_b<<" "<<s_l;
}

int main(){
	int n ,a[1000],x;
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	cin>>x;
	bai4(a,n,x);
	return 0;
}
