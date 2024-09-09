#include <iostream>
using namespace std;

int timViTri(int a[], int k, int n){
    // Find the position where k should be inserted
    for(int i = 0 ; i < n ; i++){
        if(a[i] > k ){
            return i;
        }
    }
    return n; 
}

void chenK(int a[], int &n, int k){
    int viTri = timViTri(a, k, n);
    // Shift elements to the right to make space for k
    for(int i = n - 1 ; i >= viTri ; i--){
        a[i + 1] = a[i];
    }
    // Insert k at the correct position
    a[viTri] = k;
    // Increase the array size
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
    // Input the number of elements in the array
    cin >> n;
    // Input the array elements
    for(int i = 0; i < n; i++){
        cin >> a[i];
    }
    // Input the value of k
    cout << "Nhap k: "; 
    cin >> k;
    // Insert k into the array
    chenK(a, n, k);
    // Output the updated array
    xuat_mang(a, n);
    return 0;
}

