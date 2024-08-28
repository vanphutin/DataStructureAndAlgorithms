#include <iostream>
using namespace std;

// tinh S = 1/1 + 1/2 + 1/3 + 1/4

float tinhTong(int a){
	if(a == 1) return 1.0;
	return tinhTong(a-1) + (1.0/a); 
}

int main(){
	int a; cin>>a;
	cout<<tinhTong(a);
	return 0;
}
