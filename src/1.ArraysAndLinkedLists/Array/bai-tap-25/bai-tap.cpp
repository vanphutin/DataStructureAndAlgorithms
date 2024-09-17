#include <iostream>
using namespace std;

int mangChanLe(int a[], int n){
	int dem = 0, size = n/2;
	for (int i = 0 ; i < n; i++){
		if(a[i] % 2 == 0){
			dem++;
		} 
	}
	if(dem > size){
		return 1;
	}else if(dem < size){
		return 0;
	}else if(dem == size){
		return -1;
	}
}

int main() {
    int n;
    cin >> n;
    
    int a[100001];
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    if(mangChanLe(a,n) == 1){
    	cout<<"CHAN";
	}else if(mangChanLe(a,n) == 0){
		cout<<"LE";
	}else if(mangChanLe(a,n)){
		cout<<"CHAN LE";
	}
    
    return 0;
}

