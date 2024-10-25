#include <iostream>
using namespace std;

struct Node{
	int data;
	Node *next;
};

typedef Node* List;

void insertFirst(int x, List &F){
	List p = new Node;
	p->data = x;
	p->next = NULL;
	if(F == NULL){
		F = p;
	}else{
		p->next = F ;
		F = p;	
	}
	
}

void insertLast(int x, List &F){
	List p = new Node;
	p->data = x;
	p->next = NULL;
	if(F == nullptr) {
		F = p;
	}else{
		List q = F;
		while(q->next){
			q = q->next;
		}
		q->next = p;
	}
}

void insertAtPosition(int x, int viTri, List &F){
	List p = new Node;
	p->next = NULL;
	p->data = x;
	if(viTri == 0){
		p->next = F;
		F = p ;
		return ;
	}
	List q = F;
	for(int i = 0 ; i < viTri - 1 && q != nullptr; i++){
		q = q->next;
	}
	if(q == nullptr){
		cout<<"vi tri khong hop le";
		return;
	}
	p->next = q->next;
	q->next = p;
	
}

void delFirst(List &F){
	List p = F;
	if(F == NULL){
		cout<<"empty";return ;
	}else{
		F = F->next;
		delete p;
	}
}

void delLast(List &F){
	if(F == nullptr) {
		cout<<"empty"; return ;
	}else{
		List p = F;
		while(p->next->next){
			p = p->next;
		}
		delete p->next;
		p->next = nullptr;
	}
}

void delVal(int val, List &F){
	if(F == nullptr ) return;
	List current = F;
	List prev = nullptr;
	while(current != nullptr){
		if(current->data == val){
			// TH o vi tri dau tien
			if(prev == nullptr){
				F = F->next;
				delete current;
				return ;
			}else{
				//TH o cuoi or giua danh sach
				prev->next = current->next;
				delete current;
			}
			return;
		}
		prev = current;
		current = current->next;
	}
}

void delByPosition(int position , List &F){
	if(F == NULL) return ;
	List p = F;
	//vi tri dau tien
	if(position == 0){
		F = F->next ;
		delete p;
		return ;
	}
	for(int i = 0 ; i<position-1 && p != nullptr ; i++){
		p = p->next;
	}
	List temp = p->next;
	p->next = temp->next;
	delete temp;
}

// tim kiem
bool searchNode(int key , List &F){
	if(F == NULL ) return false;
	List p = F;
	while(p){
		if(p->data == key){
			return true;
		}
		p = p->next;
	}
	return false;
}

void printF(List F){
	List p = F;
	cout<<"data: ";
	while(p){
		cout<<p->data<<" ";
		p = p->next;
	}
}

int main(){
	List F = NULL;
	insertFirst(4,F);
	insertFirst(5,F);
	insertLast(1,F);
	insertLast(3,F);
	insertAtPosition(4,3,F);
	printF(F);
	delByPosition(3,F);
	printF(F);
	if(searchNode(4, F)){
		cout<<"Y";
	}
//	cout<<endl;
//	delFirst(F);delFirst(F);delFirst(F);
//	printF(F);
//	cout<<endl;
//	delLast(F);
//	printF(F);
}
