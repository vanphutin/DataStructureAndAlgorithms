#include <iostream>
#include <math.h>
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
	p->prev = NULL;
	if(F == NULL){
		F = L = p;
	}else{
		F->prev = p;
		F = p;
		
	}
}

void insertLast(int x , List &F, List &L){
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

void delFirst(List &F , List &L){
	if(F == L){
		delete L;
		F = L = NULL;
	}else{
		List p = F;
		F = F->next;
		F->prev = NULL;
		delete p;
	}
}

void delLast(List &F, List &L){
	if(F == L){
		delete L;
		F = L = NULL;
	}else{
		List p = L;
		L = L->prev;
		L->next = NULL;
		delete p;
	}
}

void delValue(int value, List &F, List &L){
	List p = F;
	while(p){
		List next = p->next;
		if(p->data == value){
			if(p == F){
				F = F->next;
				F->prev = NULL;
				delete p;
			}else if(p == L){
				L = L->prev;
				L->next = nullptr;
				delete p;
			}else{
				p->next->prev = p->prev;
				p->prev->next = p->next;
			}
		}
		 p = next;
	}
}

bool checkValue(int value , List &F, List &L){
	List p = F;
	while(p){
		if(p->data == value){
			return true;
		}
		 p = p->next;
	}
	return false;
}
void sort_tang(List F, List L){
	bool swaped = true;
	while(swaped){
		List p = F;
		swaped = false;
		while(p->next){
			if(p->data > p->next->data){
			swap(p->data, p->next->data);
			swaped = true;
			}
			p = p->next;
		}	
	}
}
void print(List F){
	List p = F;
	cout<<"data: ";
	while(p){
		cout<<p->data<<" ";
		p = p->next;
	}
}
int main(){
	List F = nullptr, L = nullptr;
	insertFirst(5,F,L);
	insertFirst(6,F,L);
	insertFirst(7,F,L);
	insertLast(1,F,L);
	insertLast(2,F,L);
	print(F);
	cout<<endl;
//	delFirst(F,L);
//	delFirst(F,L);
//	delLast(F,L);
//	delValue(6,F,L);
	if(checkValue(69,F,L)){
		cout<<"\nY";
	}else{
		cout<<"\nN";
	}
	sort_tang(F,L);
	print(F);
}
