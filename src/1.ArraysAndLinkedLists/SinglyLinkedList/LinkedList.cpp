#include <iostream>
using namespace std;

struct Node{
	int data;
	Node *Next;
};

typedef Node *List;

void insertFirst(int x, List &F){
	List p = new(Node);
	p->data = x;
	p->Next = NULL;
	if(F == NULL){
		F = p;
	}else{
		p->Next = F ; F = p;
	}
}

void defFirst(List &F){
	List p = F;
	F = F->Next;
	delete(p);
}

void insertLast(int x, List &F){
	List p = new (Node);
	p->data = x;
	p->Next = NULL;
	if(F == NULL){
		F = p;
	}else{
		List q = F;
		while(q->Next){
			q = q->Next;
		}
		q->Next = p;
	}
}

void printF(List F){
	List p = F;
	while(p){
		cout<<"\nData: "<<p->data;
		p = p->Next;
	}
}


int main(){
	int a; List F=NULL;
	while(1){
		cin>>a;
		if(a == 0){
			printF(F);break;
		}else if(a % 2 == 0){
			insertFirst(a,F);
		}else{
			insertLast(a,F);
		}
	}
	return 0;
}





