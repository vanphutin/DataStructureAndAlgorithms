#include <iostream>
using namespace std;

//bai 1

int check(int a[],int x){
	
	cin>>a[0];
	cin>>a[1];
	cin>>a[2];
	cin>>a[3];
	cin>>a[4];
	cin>>a[5];
	
	cout<<"enter x";
	cin>>x;
	if(a[0] == x) return  0; 
	if(a[1] == x) return  1;
	if(a[2] == x) return  2; 
	if(a[3] == x) return  3;  
	if(a[4] == x) return  4; 
	if(a[5] == x) return  5; 
	
}

//bai 2 - tinh tong 

int tongChan(int a[]){
	cin>>a[0];
	cin>>a[1];
	cin>>a[2];
	cin>>a[3];
	cin>>a[4];
	cin>>a[5];
	
	int tong = 0;
	tong = tong + a[2];
	tong = tong + a[4];
	tong = tong + a[0];
	
	return tong;
	
}

int main(){
	int a[6],x;
//	cout<<check(a,x);
	cout<<tongChan(a);
	return 0;
}
