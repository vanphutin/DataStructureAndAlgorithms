#include <iostream>
using namespace std;

void bai12(int n) {
    if (n > 0) {
        bai12(n / 16); 
        int remainder = n % 16;  

        if (remainder < 10) {
            cout << remainder; 
        } else {
            cout << char(remainder - 10 + 'A');  
        }
    }
}

int main() {
    int n;
    cin >> n;
    if (n == 0) {
        cout << "0"; 
    } else {
        bai12(n);  
    }
    return 0;
}

