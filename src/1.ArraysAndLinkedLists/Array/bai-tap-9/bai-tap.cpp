#include <iostream>
using namespace std;

int mark[100001] = {0}; 

void tanSuat(int a[], int n) {
    
    for (int i = 0; i < n; i++) {
       
        if (mark[a[i]] == 0) {
            int dem = 0;
         
            for (int j = 0; j < n; j++) {
                if (a[j] == a[i]) {
                    dem++;
                }
            }
           
            cout << a[i] << " xuat hien " << dem << " lan" << endl;
           
            mark[a[i]] = 1;
        }
    }
}

int main() {
    int n;
    cout << "Nhap so phan tu cua mang: ";
    cin >> n;
    
    int a[n];
    cout << "Nhap cac phan tu cua mang: ";
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    tanSuat(a, n); 

    return 0;
}

