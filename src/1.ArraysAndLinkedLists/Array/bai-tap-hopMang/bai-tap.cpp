#include <iostream>
using namespace std;
//chuong trinh gop hai mang da sap xep A [] va B [] thanh mot mang moi C [] sau do xuat mang C [] ra man hinh

void nhap_mang(int A[], int &n){
	cout<<"nhap n: \n"; cin>>n;
	for(int i = 0 ; i<n; i++){
		cin>>A[i];
	}
}

void xuat_mang(int A[], int n){
	cout<<"xuat mang \n";
	for(int i = 0 ; i<n; i++){
		cout<<A[i]<<" ";
	}
}

void hopMang(int A[], int nA, int B[], int nB,int C[], int &nC){
	nC = nA + nB; int iA=0,iB=0;
	
	for(int iC = 0 ; iC < nC ; iC++){
		if(iA == nA){
			C[iC] = B[iB]; iB++;
		}else if(iB == nB){
			C[iC] = A[iA]; iA++;
		}else if(A[iA] > B[iB]){
			C[iC] = B[iB]; iB++;
		}else{
			C[iC] = A[iA]; iA++;
		}
	}
}

int main(){
	int nA,nB,nC,A[1000], B[1000], C[2000];
	nhap_mang(A,nA);
	nhap_mang(B,nB);
	hopMang(A,nA,B,nB,C,nC);
	xuat_mang(C,nC);
	return 0;
}
