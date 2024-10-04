#include <iostream>
using namespace std;

int timViTri(int a[], int k, int n){
    for(int i = 0 ; i < n ; i++){
        if(a[i] > k ){
            return i;
        }
    }
    return n; 
}

void chenK(int a[], int &n, int k){
    int viTri = timViTri(a, k, n);
    for(int i = n - 1 ; i >= viTri ; i--){
        a[i + 1] = a[i];
    }
    a[viTri] = k;
    ++n;
}

void xuat_mang(int a[], int n){
    cout << "Danh Sach\n";
    for(int i = 0 ; i < n ; i++){
        cout << a[i] << " ";
    }
    cout << endl;
}

int main(){
    int n, a[100000], k;
    cin >> n;
    for(int i = 0; i < n; i++){
        cin >> a[i];
    }
    cout << "Nhap k: "; 
    cin >> k;
    chenK(a, n, k);
    xuat_mang(a, n);
    return 0;
}

