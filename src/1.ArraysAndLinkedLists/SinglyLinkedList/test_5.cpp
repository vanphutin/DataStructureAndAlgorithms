#include <iostream>
using namespace std;

struct node{
	int data;
	node* next , *prev;
};

typedef node* List ;
void insertFirst(int x,List &F, List &L){
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
void delFirst( List &F, List &L){
	if(F==L){
		delete L;
		F=L=NULL;
	}else{
		List p = F;
		F = F->next;
		F->prev =NULL;
		delete p;
	}
}
void delLast( List &F, List &L){
	if(F==L){
		delete L;
		F=L=NULL;
	}else{
		List p = L;
		L = L->prev;
		L->next = NULL;
		delete p;
	}
}

void print(List F, List L){
	if(F == NULL){
		cout<<"\nisempty"; return;
	}else{
		List p = F;
		cout<<"\ndata: "<<endl;
		while(p!=NULL){
			cout<<p->data<<" "; 
			p = p->next;
		}
	}
}

int main(){
	List F = NULL;
	List L = NULL;
	insertFirst(5,F,L);
	insertLast(6,F,L);
	print(F, L);
	delLast(F,L);
	print(F, L);
	return 0;
}
