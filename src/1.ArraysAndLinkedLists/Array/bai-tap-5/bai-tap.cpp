#include <iostream>
using namespace std;

void inPhanTu(int a[], int n){
	bool found = false;
	for(int i = 0 ; i < n ; i+=2){
		if(a[i] % 2 == 0){
			cout << a[i] << " ";
			found = true;
		}
	}
	if (!found) {
		cout << "none" << endl;
	}
}

int main(){
	int n, a[1000];
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	inPhanTu(a, n);
	return 0;
}

