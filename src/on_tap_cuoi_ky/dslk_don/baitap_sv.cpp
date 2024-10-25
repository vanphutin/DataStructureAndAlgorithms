#include <iostream>
#include <math.h>
using namespace std;

struct SinhVien{
	int maSV;
	string hoTen;
	float mon1,mon2,mon3;
	
	float diemTb(){
		return (mon1+mon2+mon3) / 3.0;
	}
};

struct Node{
	SinhVien data;
	Node* next, *prev;
};
typedef Node* List;

// nhap vao sinh vien
void insertSV(SinhVien sv , List &F, List &L){
	List p = new Node;
	p->data = sv;
	p->next = F;
	p->prev = nullptr;
	if(F == nullptr){
		L = p;
	}else{
		F->prev = p;
	}
	F = p;
}

//kiem tra sinh vien ton tai
bool checkSV(int maSV, List F){
	if(F == nullptr){
		return false;
	}else{
		List p = F;
		while(p){
			if(p->data.maSV == maSV){
				return true;
			}
			p = p->next;
		}
	}
	return false;
}

// tim kiem dia chi node cua 1 sinh vien 
void searchLocation(int key, List F){
	if(F == nullptr) {
		cout<<"null";
		return;
	}
	List p = F;
	while(p){
		if(p->data.maSV == key){
			cout<<"dia chi: "<<p;
		}
		p = p->next;
	}
}

// xoa sinh vien
void delSV(int maSV, List &F ,List &L){
	if(F == NULL) return ;
	List p = F;
	while(p != nullptr && p->data.maSV != maSV){
		p = p->next;
	}
	if(p == nullptr) {
		cout << "Khong tim thay sinh vien co ma " << maSV << endl;
        return;
	}
	if(p == F && p == L){
		F = L = nullptr;
	}else if(p == F){
		F = F->next;
		F->prev = nullptr;
	}else if( p == L){
		L = L->prev;
		L->next = nullptr;
	}else{
		p->prev->next = p->next;
		p->next->prev = p->prev;
	}
	delete p;
}

void del_sv(int maSV, List &F, List &L){
	if(F == NULL)return ;
	List p = F;
	while(p){ // duyet tat ca cac nut trong ds o(n)
		List next = p->next;
		if(p->data.maSV == maSV){
			if(p == F){ // dau danh sach o(1)
				F = F->next;
				F->prev = NULL;
				delete p;
			}else if(p == L){ // cuoi danh sach o(1);
				L = L->prev;
				L->next = nullptr;
				delete p;
			}else{ // giua danh sach
				p->prev->next = p->next;
				p->next->prev = p->prev;
				delete p;
			}
			return ;
		}
		p = next;
	}
	 cout << "Khong tim thay sinh vien co ma " << maSV << endl;
}

// sap xep
void sort_tang(List F, List L){
	bool swaped = true;
	while(swaped){
		List p = F;
		swaped = false;
		while(p->next){
			if(p->data.diemTb() > p->next->data.diemTb()){
				swap(p->data,p->next->data);
				swaped = true;
			}
			p =p->next;
		}
	}
}
void printSV(List F){
	if(F == NULL){
		return ;
	}
	List p = F;
	while(p){
		cout<<"\n===============================\n";
		cout<<"\nho ten "<<p->data.hoTen;
		cout<<"\nma sv "<<p->data.maSV;
		cout<<"\ndiem trung binh "<<p->data.diemTb(); 
		p = p->next;
	}
}
int main(){
	List F = nullptr, L = nullptr;
	SinhVien sv1 = {1,"Van Phu Tin", 10,10,10};
	 SinhVien sv2 = {2, "Tran Thi B", 1, 1, 1};
	  SinhVien sv3 = {3, "Nguyen Van A", 8, 9, 7};
	insertSV(sv1, F,L);
	insertSV(sv2,F,L);
	insertSV(sv3,F,L);
	sort_tang(F,L);
	searchLocation(2,F);
	printSV(F);
//	if(checkSV(12, F)){
//		cout<<"\nY";
//	}else{
//		cout<<"\nN";
//	}
//	del_sv(3,F,L);
//	printSV(F);
}
