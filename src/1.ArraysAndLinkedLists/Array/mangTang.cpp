#include<iostream>
using namespace std;

void nhap(int &n, int a[]) {
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
}

bool xuLy(int n, int a[]) {
    for (int i = 1; i < n - 1; i++) {  
        for (int j = i + 1; j < n; j++) {
            if (a[j] > a[i] + a[i - 1]) {
                return true;
            }
        }
    }
    return false;
}

int main() {
    int n, a[1000];
    nhap(n, a);
    if (xuLy(n, a)) {
        cout << "yes";
    } else {
        cout << "no";
    }
    return 0;
}

