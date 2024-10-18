#include <iostream>
using namespace std;

struct Node{
	int data;
	Node *next;
};

typedef Node* List;

void insertFirst(int x , List &F){
	List p = new Node;
	p->data = x;
	p->next = NULL;
	if(F == nullptr){
		F = p;
	}else{
		p->next = F;
		F = p;
	}
}
void insertLast(int x, List &F){
	List p = new Node;
	p->data = x;
	p->next = NULL;
	if(F == nullptr){
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
	if(F == nullptr) return ;
	List p = F;
	F = F->next;
	delete(p);
}
void delLast(List &F){
	if(F == NULL) return;
	if(F->next == nullptr){
	delete F;
	F = nullptr;
	return ;
	}
	List p = F;
	while(p->next->next){
		p = p->next;
	}
	delete(p->next);
	p->next = nullptr;
}

int dem_k(int k, List F){
	if(F == nullptr) return 0;
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
int* tim_gt(int gt, List F) {
    List p = F; 
    while (p != nullptr) {  
        if (p->data == gt) {  
            return &(p->data); 
        }
        p = p->next; 
    }
    return nullptr;  
}

int dem_ds(List F){
	if(F == nullptr) return 0;
	int cnt = 0;
	List p = F;
	while(p){
		if(p->data){
			cnt ++;
		}
		p = p->next;
	}
	return cnt;
}
void search_max_min(List F){
	List p = F;
	int max_ds = p->data, min_ds = p->data;
	if(F == nullptr) return ;
	while(p){
		if(p->data > max_ds){
			max_ds = p->data;
		}
		if(p->data < min_ds){
			min_ds = p->data;
		}
		p = p->next;
	}
	cout<<"\nmin "<<min_ds<<"\nmax "<<max_ds;
}
bool is_sort(List F){
	List p = F;
	if(F == NULL) return false;
	while(p->next){
		if(p->data > p->next->data){
			return false;
		}
		p = p->next;
	}
	return true;
}
void printF(List F){
	if(F == nullptr) {
		cout<< "rong "; return;
	}

	List p = F;
	cout<<"data: \n";
	while(p){
		cout<<p->data<<" ";
		p = p->next;
	}
}

int main(){
	List F = NULL;
	insertFirst(5,F);
	insertFirst(2,F);
	insertLast(6,F);
	insertLast(9,F);
	printF(F);
	cout<<"\ndem k "<<dem_k(5,F);
	cout<<"\ndem ds "<<dem_ds(F);
	search_max_min(F);
	if(is_sort(F)){
		cout<<"\nYes";
	}else{
		cout<<"\nNo";
	}
	cout<<"\n"<<tim_gt(5,F);
//	delFirst(F);delFirst(F);
//	printF(F);
//	delLast(F);
//	printF(F);
	return 0;
}
