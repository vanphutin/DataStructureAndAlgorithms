#include <iostream>
using namespace std;

int mark[1000001] = {0}; // M?ng d? dánh d?u s? l?n xu?t hi?n

void tan_xuat_3(int a[], int n) {
    int max_val = -1e9; // Luu tr? giá tr? l?n nh?t trong m?ng
    int max_freq = 0;   // Luu t?n su?t l?n nh?t
    int most_freq_element = 0; // Luu ph?n t? có t?n su?t l?n nh?t

    // Ð?m s? l?n xu?t hi?n c?a m?i ph?n t?
    for (int i = 0; i < n; i++) {
        mark[a[i]]++;
        if (a[i] > max_val) {
            max_val = a[i];
        }
    }

    // Tìm ph?n t? có t?n su?t xu?t hi?n l?n nh?t
    for (int i = 0; i <= max_val; i++) {
        if (mark[i] > max_freq) {
            max_freq = mark[i];
            most_freq_element = i;
        }
    }

    // In ra ph?n t? có t?n su?t l?n nh?t và t?n su?t c?a nó
    cout << "Phan tu xuat hien nhieu nhat: " << most_freq_element << " voi tan suat: " << max_freq << endl;

    // Reset m?ng mark[] cho l?n s? d?ng sau
    for (int i = 0; i < n; i++) {
        mark[a[i]] = 0;
    }
}

int main() {
    int a[10000], n;
    cin >> n; // Nh?p s? lu?ng ph?n t?

    for (int i = 0; i < n; i++) {
        cin >> a[i]; // Nh?p t?ng ph?n t?
    }

    tan_xuat_3(a, n); // G?i hàm d? x? lý và in k?t qu?
    return 0;
}

