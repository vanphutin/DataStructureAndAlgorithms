#include <iostream>
using namespace std;
//dem so chu so n
int dem(int n){
	//diem dung 
	if(n<10) return 1;
	return dem(n/10) + 1 ;
	
}

//cho 2 so nguyen a,b , tim ucln 2 so nguyen 
int UCLN(int a, int b){
	if(b==0) return a;
	return UCLN(b, a%b);
}
 // 10 15
 
// (15, )
 


int main(){
//	cout<<dem(208);
int a,b; cin>>a>>b;
	cout<<UCLN(a,b);
	return 0;
}
