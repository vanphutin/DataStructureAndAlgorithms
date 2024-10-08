#include <iostream>

using namespace std;

struct node{
	int data;
	node *next, *prev;
};

typedef node* List;

void insertFirst(int x, List &F, List &L){
	List p = new node;
	p->data = x;
	p->next = F;
	p->prev = NULL;
	
	if(F == NULL){
		F=L=p;
	}else{
		F->prev = p;
		F = p; 
	}
}
void insertLast(int x, List &F, List &L){
	List p = new node;
	p->data = x;
	p->next = NULL;
	p->prev = L;
	
	if(F == NULL){
		F = L = p;
	}else{
		L->next = p;
		L = p;
	}
}

void print(List F, List L){
	if(F == NULL){
		cout<<"rong"; return ;
	}
	List p = F;
	cout<<"\ndata: "<<endl;
	while(p){
		cout<<p->data<<" ";
		p = p->next;
	}
}

void delFirst(List &F, List &L){
	if(F==L){
		delete F;
		F = L = NULL;
	}else{
		List p = F;
		F = F->next;
		delete p;
		F->prev = NULL;
	}
	
}
void delLast(List &F, List &L){
	if(F == L){
		delete L;
		F = L = NULL;
	}else{
		List p = L;
		L = L->prev;
		delete p;
		L->next = NULL;
	}
}
void delVal(int k, List &F, List &L){
	if(F == NULL){
		return;
	}
	List p = F;
	while(p){
		List nextSav = p->next;
		if(p->data == k){
			if(p == F){
				F = F->next;
				if(F != NULL){
					F->prev = NULL;
				}else{
					L == NULL;
				}
			}else if(p == L){
				L = L->prev;
				if(L != NULL){
					L->next = NULL;
				}
			}else{
				p->prev->next = p->next;
				p->next->prev = p->prev;
			}
		}
		p = nextSav;
	}
}

void sortFnc(List F, List L){
	if(F == NULL){
		return;
	}
	bool isSort = true;
	while(isSort){
		List p = F;
		isSort = false;
		while(p->next){
			if(p->data > p->next->data){
				swap(p->data, p->next->data);
				isSort = true;
			}
			p = p->next;
		}
	}
}

main(){
	List F=NULL,L=NULL;
	insertFirst(5,F,L);
	insertFirst(6,F,L);
	insertLast(2,F,L);
	insertLast(1,F,L);
	print(F,L);
//	delFirst(F,L);
//	delLast(F,L);
//	delVal(2,F,L);
	sortFnc(F,L);
	print(F,L);
}
