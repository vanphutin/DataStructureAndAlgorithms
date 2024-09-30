#include <iostream>
using namespace std;

int mark[1000001] = {0};
void bai9(int a[],int n){
	int max_val = -1e9;
	for(int i = 0 ; i < n ; i++){
		mark[a[i]] ++;
		if(a[i] > max_val){
			max_val = a[i];
		}
	}
	for(int i = 0 ; i < max_val ; i++){
		if(mark[i]){
			cout<<i <<" "<<mark[i]<<"\n";
		}
			
	}
}
int main(){
	int n , a[10000];
	cin>>n;
	for(int i = 0 ; i < n ; i++){
		cin>>a[i];
	}
	bai9(a,n);
}
