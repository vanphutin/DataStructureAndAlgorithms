#include <iostream>
using namespace std;

int tongChan(int n) {
    if (n == 0) return 0; 
    int lastDigit = n % 10; 
    if (lastDigit % 2 == 0) {
        return lastDigit + tongChan(n / 10);
    } else {
        return tongChan(n / 10);
    }
}

int tongLe(int n){
	if(n == 0) return 0;
	
	int lastDigit = n % 10;
	if(lastDigit % 2 != 0){
		return lastDigit + tongLe(n / 10);
	}else{
		return tongLe(n / 10);
	}
	
}

int main() {
    int n;
    cin >> n;

    cout << tongChan(n) << endl;
	cout << tongLe(n) << endl;
    return 0;
}

