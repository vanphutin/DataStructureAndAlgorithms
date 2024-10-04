#include <iostream>
using namespace std;

void selectionSort(int a[], int n){
    int i, j, max, temp;
    for (i = 0; i < n-1; i++) {
        max = i;
        for (j = i+1; j < n; j++){
            if (a[j] > a[max]) max = j;
        }
        swap(a[i], a[max]);
    }
}

int inCapSo2(int a[],int n){
	int mot= a[0] - a[1];
	for(int i = 1 ; i < n ; i++){
		if(a[i] - a[i + 1]  < mot){
			mot = a[i] - a[i+1];
		}
	}	
	return mot;
}

int main(){
	int n, a[1000];
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	selectionSort(a,n);
	cout<<inCapSo2(a,n);
	return 0;
}
