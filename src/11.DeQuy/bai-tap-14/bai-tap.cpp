#include <iostream>
using namespace std;
int dem(int n){
	if(n<10) return 1;
	return dem(n/10) + 1;
}
int main(){
	int n; 
	cin >>n;
	cout<<dem(n);
	return 0;
}
