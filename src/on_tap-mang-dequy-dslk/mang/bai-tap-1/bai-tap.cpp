#include <iostream>
using namespace std;

void bai1(int a[],int n){
	int s_c = 0, s_l = 0, t_c = 0, t_l = 0;
	for(int i = 0 ; i < n ; i++){
		if(a[i] % 2 == 0){
			s_c ++;
			t_c += a[i];
		}else{
			s_l ++;
			t_l += a[i];
		}
	}
	cout<<s_c<<" "<<s_l<<" "<<t_c<<" "<<t_l;
}

int main(){
	int a[1000], n;
	cin>>n;
	for(int i = 0 ; i< n ; i++){
		cin>>a[i];
	}
	bai1(a,n);
	return 0;
}
