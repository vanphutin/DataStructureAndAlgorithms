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
		F = p ;
	}else{
		p->next = F;
		F = p;
	}
}
void insertLast(int x, List &F){
	List  p = new node;
	p->data = x;
	p->next = NULL;
	if(F == NULL){
		F = p;
	}else{
		List q = F;
		while(q->next){
			q = q->next;
		}
		q->next = p;
	}
}

void delFirst(List &F){
	if(F == NULL){
		cout<<"ko the xoa";return ;
	}else{
		List p = F;
		F = F->next;
		delete p;
	}
		
}
void delLast(List &F){
	if(F == NULL){
		cout<<"ko the xoa";return ;
	}
	if(F->next ==NULL){
		delete F;
		F = NULL;
	}
	List p = F;
	while(p->next->next){
		p = p->next;
	}
	delete p->next;
	p->next = NULL;
}

void print(List F){
	if(F == NULL){
		cout<<"empty"; return;
	}
	List p = F;
	cout<<"\ndata: "<<endl;
	while(p){
		cout<<p->data<<" ";
		p = p->next;
	}
}


int main(){
	List F = NULL;
	insertFirst(5,F);
	insertFirst(7,F);
	insertLast(6,F);
	insertLast(2,F);
	print(F);
	delLast(F);
		print(F);
//	int k;cout<<"\nenter val: "; cin>>k;
//	delVal(k,F,L);
	
	return 0;
}
