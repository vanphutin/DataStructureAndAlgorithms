#include <iostream>
using namespace std;

int minValue = 1e9, maxValue = 0;
void bai16(int n){
	if(n>0){
		bai16(n/10);
		int temp = n%10;
		if(temp > maxValue){
			maxValue = temp;
		
		}
		if(temp < minValue){
			minValue = temp;
		
		}
	}
}

int main(){
	int n;
    cin >> n;
    bai16(n);
    cout << "Max: " << maxValue << ", Min: " << minValue << endl;
	return 0;
}
