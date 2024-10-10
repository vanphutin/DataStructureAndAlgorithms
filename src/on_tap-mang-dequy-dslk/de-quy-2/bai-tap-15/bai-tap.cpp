#include <iostream>
using namespace std;
int minVL = 1e9, maxVL = 0;
void  bai15(int n){
	if(n > 0){
		bai15(n/10);
		int temp = n %10;
		if(temp < minVL){
			minVL = temp;
		}
		 if(temp > maxVL){
			maxVL = n%10;
		}
	}
	
}

int main(){
	int n; cin>>n;
	bai15(n);
	cout<<maxVL<<" "<<minVL; 
	return 0;
}
