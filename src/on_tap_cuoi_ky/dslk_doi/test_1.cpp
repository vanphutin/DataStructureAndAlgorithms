#include <iostream>
using namespace std;

struct Node{
	int data;
	Node *next, *prev;
};

typedef Node* List;

void insertFirst(int x, List &F, List &L){
	List p = new Node;
	p->data = x;
	p->next = F;
	p->prev = nullptr;
	if(F == nullptr){
		F = L = p;
	}else{
		F->prev = p;
		F = p; 
	}
}
void insertLast(int x, List &F, List &L){
	List p = new Node;
	p->data = x;
	p->next = nullptr;
	p->prev = L;
	if(F == nullptr){
		F = L = p;
	}else{
		L->next = p;
		L = p;
	}
}

void insertAtPosition(int vt , int x, List &F){
	List p = new Node;
	p->data = x;
	p->next = F;
	if(vt < 0){
		cout<<" ko hop le";
		return;
	}
	if(vt == 0){
		F->prev = p;
		F = p;
		return ;
	}
	List q = F;
	for(int i = 0 ; i < vt - 1 && q != nullptr; i++){
		q = q->next;
	}
	if(q == nullptr){
		cout<<" ko hop le";
		return;
	}
	p->next = q->next;
	q->next  = p;
	
}

void delFirst(List &F, List &L){
	if(F == L){
		delete F;
		F = L =  NULL;
	}else{
		List p = F;
		F = F->next;
		F->prev = nullptr;
		delete p;
	}
}

void delLast(List &F, List &L){
	if(F == L){
		delete L;
		F = L = nullptr;
	}else{
		List p = L;
		L = L->prev;
		L->next = nullptr;
		delete p ;
	}
}

void delAtPosition(int vt , List &F){
	List p = F;
	if(vt < 0) return ;
	if(vt == 0){
		F = F->next;
		F->prev = nullptr;
		delete p;
		return;
	}
	for(int i = 0 ; i< vt -1 && p != nullptr; i++){
		p = p->next;
	}
	if(p == nullptr) return ;
	List temp = p->next;
	p->next = temp->next;
	delete temp;
	
}

void delVal(int val, List &F, List &L){
	if(F == nullptr){
		return;
	}
	List p = F;
	while(p->next != nullptr){
		List next = p->next;
		if(p->data == val){
			if(p == F){
				F = F->next;
				if(F != nullptr){
					F->prev = nullptr;
					delete p;
				}
			}else if(p == L){
					L = L->prev;
					if(L != nullptr){
						L->next = nullptr;
						delete p;
					}
			}else{
				p->prev->next = p->next;
				p->next->prev = p->prev;
				delete p;
			}
			return;
		}
		p = next;
	}
}
void printList(List head) {
    List current = head;
    while (current != nullptr) {
        cout << current->data << " ";
        current = current->next;
    }
    cout << endl;
}

int main() {
    List head = nullptr;
    List tail = nullptr;

    // Thêm m?t s? node vào danh sách
    insertLast(10, head, tail);
    insertLast(20, head, tail);
    insertLast(30, head, tail);
    insertFirst(40, head, tail);

    cout << "Danh sach ban dau: ";
    printList(head);
	
	insertAtPosition(2,15,head);
	cout << "\nDanh sach sau chen: ";
    printList(head);
    
	delVal(40,head,tail);
 	printList(head);

    return 0;
}
