#include <iostream>
using namespace std;

struct node{
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
	if(F == NULL){
		cout<<"isEmpty"; return;
	}
	List p = F;
	F = F->next ;
	delete(p);
}

void delLast(int x, List &F ){
	if(F == NULL){
		cout<<"is empty"; return ;
	}
	if(F->next == NULL){
		delete(F);
		F = NULL;
	}
	List p = F;
	while(p->next->next != NULL){
		p = p->next;
	}
	delete p->next;
	p->next = NULL;
} 

void printF(List F){
	if(F == NULL){
		cout<<"rong"; return ;
	}
	List p = F;
	cout<<"Data :\n";
	while(p){
		cout<<p->data<<endl;
		p = p->next;
	}
}

int demK(int k, List F){
	if(F == NULL){
		return 0 ;
	}
	List p = F;
	int cnt = 0;
	while(p){
		if(p->data == k){
			cnt ++;
		}
		p = p->next;
	}
	return cnt;
}
int demSl(List F){
	if(F == NULL){
		return 0 ;
	}
	List p = F;
	int cnt = 0;
	while(p){
		if(p->data){
			cnt++;
		}
		p = p->next;
	}
	return cnt;
}

int main(){
	int choice, value,k; List F = NULL;
	do{
		cout<"\n===MENU===";
		cout<<"\n1. them vao dau danh sach : ";
		cout<<"\n2. them vao cuoi danh sach : ";
		cout<<"\n3. xoa dau danh sach : ";
		cout<<"\n4. xoa cuoi danh sach : ";
		cout<<"\n5. in danh sach : ";
		cout<<"\n6. dem sl == k";
		cout<<"\n7. dem sl pt";
		cout<<"\n0. thoat : ";
		cout<<"\n nhap lua chon";
		cin>>choice;
		switch(choice){
			case 1:
				cout<<"\n nhap vao gia tri"; cin>>value;
				insertFirst(value, F); break;
			case 2:
				cout<<"\n nhap vao gia tri"; cin>>value;
				insertLast(value, F); break;
			case 3:
				cout<<"\n xoa dau"; 
				delFirst(F); break;
			case 4:
				cout<<"\n xoa cuoi"; 
				delFirst(F); break;
			case 5:
				printF(F); break;
			case 6:
				cout<<"nhap k :"; cin>>k;
				cout<<demK(k,F); break;
			case 7:
			
				cout<<demSl(F); break;
			case 0 :
				 cout << "Thoat chuong trinh." << endl;
                break;
            default:
                cout << "Lua chon khong hop le. Vui long thu lai." << endl;	
		}
	}while(choice != 0);
}
