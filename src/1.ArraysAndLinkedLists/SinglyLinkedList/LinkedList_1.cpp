#include <iostream>

using namespace std;

struct node {
	int data;
	node* next;
};

typedef node* List;

void insertFirst(int x, List &F){
	List p = new node;
	p->data = x;
	p->next = NULL;
	if(F == NULL){
		F = p;
	}else{
		p->next = F;
		F = p;	
	}
}

void insertLast(int x, List &F){
	List p = new node;
	p->data = x;
	p->next = NULL;
	if(F == NULL){
		F = p;
	}else{
		List q = F;
		while(q->next != NULL){
			q = q->next;
		}
		q->next = p;
	}
}

void delFirst(List &F){
	List p = F;
	if(F == NULL){
		cout<<"cannot del";
		return ;
	}
	F = F->next;
	delete p;
	
	
}

void delLast(List &F){
	List p = F;
	if(F == NULL){
		cout<<"cannot del";
		return ;
	}
	if(F->next == NULL){
		delete F;
		F = NULL;
		return;
	}
	while(p->next->next != NULL){
		p = p->next;
	}
	delete p->next;
	p->next = NULL;
}

// co bao nhieu phan tu bang k
void searchElementEqualK(int K, List F){
	int count = 0;
		if(F == NULL){
		cout<<"isempty";
		return ;
	}
	List p = F;
	while(p){
		if(p->data == K){
			count ++;
		}
		p=p->next;
	}
	cout<<count<<endl;
}

void printF(List  F){
	List p = F;
	if(F == NULL){
		cout<<"Rong "; return ;
	}
	while(p){
		cout<<"data : "<<p->data<<endl;
		p = p->next;
	}
}
int countElement(List F){
	if(F == NULL){
	 return 0;
	}
	List p = F; int count = 0;
	while(p){
		if(p->data){
			count++;
		}
		p = p->next;
	}
	return count;
}
int main(){
	int choice, value,k; List F = NULL;
	do{
		cout << "\n===== Menu =====" << endl;
        cout << "1. Them vao dau danh sach" << endl;
        cout << "2. Them vao cuoi danh sach" << endl;
        cout << "3. Xoa phan tu dau tien" << endl;
        cout << "4. Xoa phan tu cuoi cung" << endl;
		cout << "5. In danh sach" << endl;
		cout << "6. Dem sl pt bang K"<<endl;
		cout << "7. Dem sl pt trong dslk"<<endl;
        cout << "0. Thoat" << endl;
        cout << "Nhap lua chon cua ban: ";
		cin>>choice;
		switch(choice){
			case 1 :
				cout<<"Nhap gia tri can them vao dau: ";
				cin>>value;
				insertFirst(value, F);
				break;
			case 2 :
				cout<<"Nhap gia tri can them vao cuoi: ";
				cin>>value;
				insertLast(value, F);
				break;
			case 3 :
				delFirst(F);
				break;
			case 4 :
				delLast(F);
				break;
			case 5:
				printF(F);
				break;	
			case 6:
				cout<<"Nhap k:"; cin>>k;
				searchElementEqualK(k,F);
			case 7:
				cout<<countElement(F)<<endl;
			case 0:
                cout << "Thoat chuong trinh." << endl;
                break;
            default:
                cout << "Lua chon khong hop le. Vui long thu lai." << endl;			
		}
	}while(choice != 0);
	return 0;
}
