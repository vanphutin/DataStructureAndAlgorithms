#include <iostream>
using namespace std;

void bai12(int n){
	if(n > 0){
		bai12(n / 16);
		int ghinho = n%16;
		if(ghinho < 10){
			cout<<ghinho;
		}else{
			cout<<char(ghinho - 10 + 'A');
		}
	}
}

int main(){
	int n;
	cin>>n;
	if(n < 0){
		cout<<"0";
	}else{
		bai12(n);
	}
	return 0;
}
