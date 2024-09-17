#include <iostream>
using namespace std;

const long long MOD = 1e9 + 7;

void tinhTongTich(long long a[], int n) {
    long long tong = 0, tich = 1;
    
    for (int i = 0; i < n; i++) {
        tong = (tong + a[i]) % MOD;    
        tich = (tich * a[i]) % MOD;    
    }
    
    cout << tong << "\n" << tich << endl;
}

int main() {
    int n;
    cin >> n;
    
    long long a[100001];
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    tinhTongTich(a, n);
    
    return 0;
}

