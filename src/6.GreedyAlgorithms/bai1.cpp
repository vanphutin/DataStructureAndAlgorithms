#include <iostream>
using namespace std;

int tien[] = {1000, 500, 200, 100, 50, 20, 10, 5, 2, 1};
int bai1(int n){
	int cnt = 0, idx = 0;
	while(n){
		cnt += n/tien[idx];
		n = n % tien[idx];
		idx++;
	}
	return cnt;
}
int main (){
	int n;
	cin>>n;
	cout<<bai1(n);
	
	return 0;
}

