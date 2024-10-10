#include <iostream>
using namespace std;

int bai16_inphai(int n){
	if(n < 10) return n;
	return bai16_inphai(n/10)*10 + n%10;
}
void bai16_intrai(int n){
	if(n < 10) return n;
	
}

int main(){
	int n;cin>>n;
	cout<<bai16_inphai(n);
	cout<<endl;
	cout<<bai16_intrai(n);
	return 0;
}
