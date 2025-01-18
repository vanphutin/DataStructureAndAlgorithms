#include <bits/stdc++.h>
using namespace std;

int a[100][100]; // Ma tran toi da 100x100
int n, m; // Kich thuoc cua ma tran
int s, t, v, u; // Toa do bat dau (s,t) va toa do kiem tra (v,u)

// Ham nhap ma tran
void nhap() {
    cin >> n >> m >> s >> t >> v >> u; // Nhap so hang va cot
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> a[i][j]; // Nhap tung phan tu cua ma tran
        }
    }
}

// Mang huong (trai, phai, len, xuong)
int dx[4] = {-1, 0, 0, 1}; // Thay doi chi so dong
int dy[4] = {0, -1, 1, 0}; // Thay doi chi so cot

// Ham loang (duyet)
void Loang(int i, int j) {
    a[i][j] = 0; // Danh dau o da duoc duyet
    cout << "Di qua o (" << i << ", " << j << ")" << endl; // In ra vi tri duyet
    for (int k = 0; k < 4; k++) { // Duyet 4 huong
        int i1 = i + dx[k], j1 = j + dy[k]; // Tinh toan vi tri moi
        if (i1 >= 0 && i1 < n && j1 >= 0 && j1 < m && a[i1][j1] == 1) { // Neu vi tri hop le va la 1
            Loang(i1, j1); // Goi de quy de duyet
        }
    }
}

int main() {
    nhap(); // Nhap ma tran
    Loang(s, t); // Bat dau loang tu vi tri (s, t)

    // Kiem tra xem (v, u) co duoc duyet qua hay khong
    if (a[v][u] == 0) {
        cout << "\nYES"; // Neu a[v][u] da duoc duyet qua
    } else {
        cout << "\nNO"; // Neu a[v][u] chua duoc duyet qua
    }

    return 0;
}

