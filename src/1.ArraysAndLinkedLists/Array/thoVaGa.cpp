#include <iostream>

using namespace std;

int main() {
    int totalHeads , totalLegs;  
    cin>>totalHeads; cin>> totalLegs;
    
    for (int i = 0; i <= totalHeads; i++) {
        int chickens = totalHeads - i;
        if (i * 4 + chickens * 2 == totalLegs) {
            cout << i << endl;
            cout << chickens << endl;
            break;
        }else{
        	cout<<"-1";
		}
    }

    return 0;
}

