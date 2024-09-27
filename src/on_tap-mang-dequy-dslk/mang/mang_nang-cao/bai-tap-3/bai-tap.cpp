#include <iostream>
using namespace std;

bool bai3(int a[], int n){
	int count25 = 0 , count50 = 0;
	
	for(int i = 0 ; i < n ; i++){
		if(a[i] == 25){
			count25++;
		}
		else if(a[i] == 50){
			if(count25 > 0){
				count25--;
				count50++;
			}else{
				return false;
			}
		}
		else if(a[i] == 100){
			if(count25 > 0 && count25> 0){
				count50 --;
				count25--;
			}
			else if(count25 >= 3){
				count25 -=3;
			}
			else{
				return false;
			}
		}
	}
	return true;
}

int main(){
	int a[1000], n;
	cin>>n;
	for(int i = 0 ; i < n ; i++){
		cin>>a[i];
	}
	 if (bai3(a, n)) {
        cout << "YES" << endl;
    } else {
        cout << "NO" << endl;
    }
	return 0;
}
