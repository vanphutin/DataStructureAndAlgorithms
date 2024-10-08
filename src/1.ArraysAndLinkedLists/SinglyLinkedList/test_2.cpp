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
	if(F == NULL) {
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

void printF(List F){
	if(F == NULL){
		cout<<"empty"; return;
	}
	List p = F;
	cout<<"data "<<endl;
	while(p){
		cout<<p->data<<endl;
		p = p->next;
	}
}

void delFirst(List &F){
	if(F == NULL){
		cout<<"ds rong"; return ;
	}
	List p = F;
	F = F->next;
	delete p;
}

void delLast(List &F){
	if(F == NULL){
		cout<<"ds rong"; return ;
	}
	if(F->next ==NULL){
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

int findEqualK(int K, List F){
	if(F == NULL) {
		return 0;
	}
	List p = F;
	int cnt = 0;
	while(p){
		if(p->data == K){
			cnt ++;
		}
		p = p->next;
	}
	return cnt;
}

int demPT(List F){
		if(F == NULL) {
		return 0;
	}
	List p = F;
	int cnt = 0;
	while(p){
		if(p->data != NULL){
			cnt ++;
		}
		p = p->next;
	}
	return cnt;
}

void find_min_max(List F){
	if (F == NULL) {
        cout << "Danh sach rong." << endl;
        return;
    }
	List p = F;
	int min = p->data , max = p->data;
	while(p != NULL){
		if(p->data > max){
			max = p->data;
		}else if(p->data < min){
			min = p->data;
		}
		p = p->next;
	}
	cout<<"min: "<<min<<"\nmax: "<<max;
}
bool isSort(List F){
	if (F == NULL) {
        return false;
    }
    List p = F;
    while(p->next != NULL){
    	if(p->data > p->next->data){
    		return false;
		}
		p = p->next;
	}
	return true;
}

int main(){
	List F  = NULL;
	insertFirst(1,F);
	insertFirst(2,F);
	insertFirst(3,F);
	insertLast(5,F);
	insertLast(11,F);
	insertLast(5,F);
	insertLast(9,F);
	printF(F);
	if(isSort(F)){
		cout<<"Y";
	}else{
		cout<<"N";
	}
	find_min_max(F);
	cout<<"so luong pt "<<demPT(F)<<endl;
	cout<<"so pt = k "<<findEqualK(5,F)<<endl;
	delFirst(F);
	delLast(F);
	printF(F);
}
