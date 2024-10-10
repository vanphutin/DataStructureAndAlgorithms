#include <iostream>
#include <math.h>
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
	if(F==NULL){
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
		cout<<"Cannot del"; return;
	}else{
		List p = F;
		F = p->next;
		delete p;
	}
	
}

void delLast(List &F){
	if(F == NULL){
		cout<<"Cannot del"; return;
	}else{
		List p = F;
		while(p->next->next){
			p = p->next;
		}
		delete p->next;
		p->next = NULL;
	}
}

// kiem tra tang dan
bool isSort(List F){
	List p = F;
	while(p->next){
		if(p->data > p->next->data){
			return false;
		}
		p = p->next;
	}
	return true;
}

//check ngto
bool ngTo(int n){
	if(n < 2) return false;
	for(int i = 2 ; i <= sqrt(n); i++){
		if(n % i == 0){
			return false;
		}
	}
	return true;
}

void printNgTo(List F){
	if(F == NULL) return ;
	List p = F;
	cout<<"\ncac so nguyen to: ";
	while(p->next){
		if(ngTo(p->data)){
			cout<<p->data<<" ";
		}
		p = p->next;
	}
}

void printF(List F){
	List p = F;
	if(F == NULL){
		cout<<"empty"; return;
	}
	cout<<"\ndata: ";
	while(p){
		cout<<p->data<<" ";
		p = p->next;
	}
}
main(){
	List F = NULL;
	insertFirst(5,F);
	insertFirst(9,F);
	insertFirst(6,F);
	insertLast(17,F);
	insertLast(22,F);
	if(isSort(F)){
		cout<<"Y";
	}else{
		cout<<"N";
	}
	printF(F);
	printNgTo(F);
	delFirst(F);
	delFirst(F);
	printF(F);
	delLast(F);
	printF(F);

}
