#include <iostream>
using namespace std;

struct node{
	int data;
	node* next;
};

typedef node* List ;

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
		cout<< "empty"; return;
	}
	List p = F;
	F = F->next;
	delete p;
}
void delLast(List &F){
	if(F == NULL){
			cout<< "empty"; return;
	}
	List p = F;
	while(p->next->next != NULL){
		p = p->next;
	}
	delete p->next;
	p->next = NULL;
}

int EqualF(int k, List F){
	if(F == NULL) return 0;
	int cnt = 0;
	
	List p = F;
	while(p){
		if(p->data == k){
			cnt ++;
		}
		p = p->next;
	}
	return cnt;
}

int cntPt(List F){
	int cnt = 0;
	if(F == NULL) return 0;
	List p  = F;
	while(p != NULL){
		if(p->data){
			cnt ++;
		}
		p = p->next;
	}
	return cnt;
}
void find_min_max(List F){
	if(F == NULL) return;
	List p = F;
	int min_val = p->data, max_val = p->data;
	
	while(p != NULL){
		if(p->data > max_val ){
			max_val = p->data;
		}
		if(p->data < min_val){
			min_val = p->data;
		}
		p = p->next;
	}
	cout<<"min: "<<min_val<<"\nmax : "<<max_val;
}

bool isShort(List F){
	if(F == NULL) return false;
	List p = F;
	while(p->next != NULL){
		if(p->data > p->next->data){
			return false;
		}
	}
	return true;
}

void printF(List F){
	if(F == NULL){
		cout<< "empty"; return;
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
	insertFirst(4,F);
	insertFirst(5,F);
	insertFirst(6,F);
	insertLast(1,F);
	insertLast(2,F);
	printF(F);
	if(isShort(F)){
		cout<<"Y";
	}else{
		cout<<"N";
	}
	cout<<"\ncount k = "<<EqualF(5,F)<<endl;
	cout<<"\ncount pt = "<<cntPt(F)<<endl;
	find_min_max(F);
	delFirst(F);
	delLast(F);
	printF(F);
	return 0;
}

