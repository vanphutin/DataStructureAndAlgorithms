#include <iostream>
using namespace std;

// bai tap 1 : tinh tong S(n)
int tinhTong(int n){
	//diem dung cua ham de quy
	if(n <= 1 ) return 1;
	return tinhTong(n-1) + n;
}

int main(){
	cout<<tinhTong(773);
	return 0;
}
