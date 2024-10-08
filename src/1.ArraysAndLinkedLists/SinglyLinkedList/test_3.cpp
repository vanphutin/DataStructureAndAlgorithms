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
		cout<<"empty"; return ;
	}else{
		List p = F;
		F = F->next;
		delete p;
	}
	
}

void delLast(List &F){
	if(F == NULL){
		cout<<"empty"; return ;
	}
	if(F->next == NULL){
		delete F;
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
	if(F == NULL) {
		cout<<" empty" ; return ;
	}
	List p = F;
	cout<<"data: "<<endl;
	while(p != NULL){
		cout<<p->data<<endl;
		p = p->next;
	}
}

int main(){
	List F = NULL; int x;
	insertFirst(5,F);
	insertFirst(4,F);
	insertFirst(3,F);
	insertLast(7, F);
	printF(F);
	
	delFirst(F);
	printF(F);
	
	delLast(F);
	printF(F);
	return 0;
}










