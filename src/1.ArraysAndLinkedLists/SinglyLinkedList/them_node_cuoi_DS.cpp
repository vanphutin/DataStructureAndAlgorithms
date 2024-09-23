#include <iostream>
using namespace std ;

struct node {
	int data;
	node * next;
};

typedef node* List;

void insertFirst(int x, List &F){ //truyen tham chieu cho bien F
	// tao 1 node moi
	List p = new node;
	p->data = x;
	p->next = NULL;
	
	if(F == NULL){
		F = p;
	}else{
		// con tro p tro den gia tri dau tien
		p->next = F; // F dai dien la 1 danh sach - 
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
		// toa ra 1 bien q dau tien de duyet
		List q = F;
		while(q->next != NULL){
			q = q->next;
		}
		q->next = p;
	}
}

void printF(List F){
	List p = F;
	while(p != NULL){
		cout<<p->data<<" ";
		p = p->next;
	}
}

main(){
	int a;List F = NULL;
	while(1){
		cin>>a;
		if( a == 0){
			printF(F); break;
		}else if(a % 2 == 0){
			insertFirst(a,F);
		}else{
			insertLast(a,F);
		}
	}
}
