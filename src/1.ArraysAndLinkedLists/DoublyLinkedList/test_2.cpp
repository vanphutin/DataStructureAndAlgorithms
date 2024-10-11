#include <iostream>

using namespace std;

struct node{
	int data;
	node* next, *prev;
};

typedef node* List;


void insertFirst(int x, List &F, List &L){
	List p = new node;
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

void print(List F){
	if(F == NULL){
		cout<<"rong"; return ;
	}else{
		List p = F;
		cout<<"data: ";
		while(p){
			cout<<p->data<<" ";
			p = p->next;
		}
	}
}
main(){
	List F= NULL, L= NULL;
	insertFirst(5,F,L);
	insertFirst(6,F,L);
	insertLast(7,F,L);
	insertLast(9,F,L);
	print(F);
}
