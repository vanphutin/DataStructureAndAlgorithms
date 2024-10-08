#include <iostream>

using namespace std;

struct node{
	int data;
	node *next;
};

typedef node* List;
void insertFirst(int x, List &F){
	List p = new node;
	p->data = x;
	p->next = NULL;
	
	if(F == NULL) {
		 F = p;
	}
	else{
		p->next = F;
		F = p;
	}
}

void insertLast(int x, List &F){
	List p = new node ;
	p->data = x;
	p->next = NULL;
	
	if(F == NULL) F = p;
	else{
		List q = F;
		while(q->next){
			q = q->next;
		}
		q->next = p;
	}
}

void delFirst(List &F){
	if(F == NULL){
		cout<<"rong"; return ;
	}else{
		List p = F;
		F = F->next;
		delete p;
	}
	
}
void delLast(List &F){
	if(F == NULL){
		cout<<"rong"; return ;
	}
	if(F->next == NULL){
		delete F;
		F = NULL;
	}else{
		List p = F;
		while(p->next->next){
		p = p->next;
	}
		delete p->next;
		p->next = NULL;
	}
	
	
}
void printF(List F){
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

main(){
	List F = NULL;
	insertFirst(5,F);
	insertFirst(6,F);
	insertFirst(2,F);
	insertLast(5,F);
	printF(F);
//	delFirst(F);
//	delFirst(F);
	delLast(F);	
	delLast(F);	
	delLast(F);	
	delLast(F);	
	printF(F);
}
