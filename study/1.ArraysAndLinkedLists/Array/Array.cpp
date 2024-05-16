#include <iostream>
using namespace std;

void nhap(int a[], int n);
void xuat(int a[],int n);
void xuatChan(int a[], int n);
int tinhTongChan(int a[], int n);
int timGiaTriLonNhat(int a[], int n);
void kiemTraTinhKhongGiam(int a[], int n);
void chen(int a[], int& n, int x, int k);
void xoaPhanTu(int a[], int& n, int k);
void tanSuat(int a[], int n);
void lietKe(int a[], int n);
void dichChuyen(int a[], int& n, int k);



int main(int argc, char** argv) {
    int a[1000], n, x,k, xoa,xoayTrai;
    
    cout << "Nhap so luong phan tu trong mang (> 0): ";
    cin >> n;
    
      nhap(a, n); 
      xuat(a,n);
    xuatChan(a,n);
      cout<<tinhTongChan(a,n);
      cout<<timGiaTriLonNhat(a,n);
    kiemTraTinhKhongGiam(a,n);
	chen( a,n,x,k);
	xoaPhanTu(a, n, xoa);
	tanSuat(a,n);
	lietKe(a,n);
	dichChuyen(a,n,xoayTrai);
    return 0;
}

// ham nhap mang
void nhap(int a[], int n) {
    cout << "Nhap cac phan tu cua mang:\n";
    for(int i = 0; i < n; i++) {
        cout << "Nhap phan tu thu " << i << ": ";
        cin >> a[i];
    }
}

//ham xuat mang
void xuat(int a[],int n){
	cout <<"\nCac phan tu trong mang la: ";
	for(int i = 0 ; i< n ; i++){
		cout<<a[i]<<" ";
	}
}

//ham xuat so chan
void xuatChan(int a[], int n){
	cout<<"\nCac so chan co trong mang la: ";
	for(int i = 0 ; i < n ; i++ ){
		if(a[i] % 2 == 0 ){
			cout<<a[i]<<" ";
		}
	}
} 

//ham tinh tong gia tri chan
int tinhTongChan(int a[], int n){
	cout<<"\nTong cac so chan trong mang la: ";
	int tong = 0;
	for(int i = 0 ; i < n ; i++ ){
		if(a[i] % 2 == 0 ){
			tong += a[i];
		}
	}
	return tong;
}

//ham tim gia tri lon nhat
int timGiaTriLonNhat(int a[], int n){
	cout<<"\nGia tri lon nhat trong mang la: ";
	int flag = 0;
	for(int i = 0 ; i < n ; i++){
		if(a[i] > flag){
			flag = a[i];
		}
	}
	return flag;
}

//ham kiem tra tinh tang giam cua mang
void kiemTraTinhKhongGiam(int a[], int n){
	cout<<"\nKiem tra tinh tang giam: ";
	bool tang = true, giam = true;
    for(int i = 1; i < n; i++) {
        if(a[i] < a[i - 1]) {
            tang = false;
        }
        if(a[i] > a[i - 1]) {
            giam = false;
        }
        
    }
    if(tang) {
        cout<<"mang TANG !";
    } else if(giam) {
        cout<<"mang GIAM !";
    } else {
        cout<<"khong xac dinh @@";
    }
    
}
	
//ham chen gia tri x vao chi so k
void chen(int a[], int& n, int x, int k){
	cout<< "\nCHEN GIA TRI x VAO CHI SO k ";
	cout<<"\nNhap gia tri x can chen vao mang: "; cin >> x;
	cout<<"Nhap chi so k : "; cin >> k;
    if (k < 0 || k > n) {
        cout << "Vi tri chen khong hop le.\n";
        return;
    }

    if (n >= 1000) {
        cout << "Khong the chen them phan tu vao mang.\n";
        return;
    }
	for(int i = n - 1 ; i >= k ; i--) 
    {
        a[i + 1] = a[i]; // dich chuyen phan tu sang trai (i+1)
    }
    a[k] = x; //gan x cho phan tu thu k 
    n++; //tang mang len +1
    xuat(a,n);
}	

//ham xoa phan tu chi so k
void xoaPhanTu(int a[], int& n, int k){
	cout<"\nXOA PHAN TU CHI SO k";
	cout<<"\nNhap vao chi so can xoa: "; cin>>k;
	for(int i = k ; i < n-1 ; i++ ){
		a[i] = a[i + 1];
	}
	n--;
	cout<<"\nMang sau khi xoa la: ";
	for(int i = 0 ; i < n ; i++){
		cout<<a[i]<<" ";
	}
	
}
	
//ham tim tan suat xuat hien 
int danhDau[100001];
void tanSuat(int a[], int n){
	cout<<"\nTAN SUAT XUAT HIEN\n";
	//dem tan suat
	int max_val = -1000000000;
	for(int i = 0 ; i < n ; i++){
		danhDau[a[i]] ++;
		if(a[i] > max_val){
            max_val = a[i];
        }
	}
	for(int i = 0; i <= max_val; i++){
        if(danhDau[i]){
            cout << i << " xuat hien " << danhDau[i] << " lan\n";
        }
    }
	
}

//ham liet ke gia tri khac nhau trong mang
void lietKe(int a[], int n) {
    cout << "\nLiet ke cac gia tri khac nhau trong mang: ";
    bool danhDau[1000] = {false}; 
    for (int i = 0; i < n; i++) {
        if (!danhDau[a[i]]) {
            cout << " " << a[i];
            danhDau[a[i]] = true;
        }
    }
}

//ham dich chuyen cac phan tu sang vi tri k
void dichChuyen(int a[], int& n, int k){
	cout<<"\nDich chuyen cac phan tu sang vi tri k";
	cout<<"\nNhap vi tri can dich chuyen: "; cin>> k;
	int temp[k];
    // Luu gia các phan tu dau tiên bi dich chuyen ra khoi mang
    for (int i = 0; i < k; i++) {
        temp[i] = a[i];
    }
    // Dich chuyen các phan tu còn lai sang trái
    for (int i = k; i < n; i++) {
        a[i - k] = a[i];
    }
    // Ðua các phan tu dã luu vào cuoi mang
    for (int i = 0; i < k; i++) {
        a[n - k + i] = temp[i];
    }
    xuat(a,n);
}
	
	
	
	
	
	
