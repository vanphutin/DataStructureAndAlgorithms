#include <iostream>
#include <cmath>
using namespace std;

int mark[1000001] = {0}; // M?ng d?m t?n su?t xu?t hi?n c?a các s?

// Hàm ki?m tra s? nguyên t?
bool ngto(int n) {
    if (n < 2) return false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

void bai12(int a[], int n) {
    for (int i = 0; i < n; i++) {
        if (ngto(a[i])) {
            mark[a[i]]++; 
        }
    }

    for (int i = 0; i < n; i++) {
        if (ngto(a[i]) && mark[a[i]] > 0) {
            cout << a[i] << " " << mark[a[i]] << endl;
            mark[a[i]] = 0;
        }
    }
}


int main() {
    int a[10000], n = 0;

    while (cin >> a[n]) {
        if (a[n] < 0) {
            break;
        }
        n++;
    }

    
    bai12(a,n);

    return 0;
}

