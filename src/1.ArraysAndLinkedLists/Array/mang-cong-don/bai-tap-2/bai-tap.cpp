#include <iostream>
using namespace std;

const int MAXN = 1e6 + 5;
long long a[MAXN], pre[MAXN];

void tinhMangCongDon(long long a[], int n) {
    pre[0] = a[0];
    for (int i = 1; i < n; i++) {
        pre[i] = pre[i - 1] + a[i];
    }
}

long long truyVanTongTinh(int l, int r) {
    if (l == 0) {
        return pre[r];
    } else {
        return pre[r] - pre[l - 1];
    }
}

int main() {
    int n, q;
    
    cin >> n >> q;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    tinhMangCongDon(a, n);
    
    while (q--) {
        int l, r;
        cin >> l >> r;
        cout << truyVanTongTinh(l, r) << endl;
    }
    
    return 0;
}

