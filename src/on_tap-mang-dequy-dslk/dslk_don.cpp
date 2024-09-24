// danh sach lien ket don

#include <iostream>
using namespace std ;

struct node{
	int data;
	node *next;
};

typedef node* List;

// them node vao dau danh sach
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


//them node vao cuoi danh sach
void insertLast(int x, List &F){
	List p = new node;
	p->data = x;
	p->next = NULL;
	if(F==NULL){
		F = p ;
	}else{
		List q = F;
		while(q->next){
			q = q->next;
		}
		q->next = p;
	}
}

// xoa dau danh sach
void delFirst(List &F){
    if(F == NULL){
        cout << "List is already empty, nothing to delete." << endl;
        return;
    }
    List p = F;
    F = F->next;
    delete p;
}

// dem so luong node 
int count(List F){
	List p = F;
	int cnt = 0;
	while(p){
		cnt ++;
		p = p->next;
	}
	return cnt;
}

//find max

int findMax(List F){
	List p = F;
	int max = p->data;
	p = p ->next;
	
	if(F == NULL){
		cout<<"List isEmpty !";
		return max;
	}
	while(p){
		if(p->data > max){
			max = p->data;
		}
		p = p->next;
	}
	return max;
}

//tim tong phan tu 
int sum(List F){
	List p = F;
	int SUM_INIT = 0 ;
	if(F == NULL){
		cout<<"isEmpty";
		return SUM_INIT;
	}
	while(p){
		SUM_INIT += p->data;
		p = p->next;
	}
	return SUM_INIT;
}
// check ngto
bool ngto(int n){
	if(n < 1 ) return false;
	for(int i = 2 ; i < n ; i ++){
		if( n % i == 0){
			return false;
		}
	}
	return true;
}

//dem so ngto
int count_pr(List F){
	List p = F;
	if(F == NULL){
		cout<<"isEmpty";
		return 0;
	}
	int cnt = 0;
	while(p){
		if(ngto(p->data)){
			cnt ++;
			cout<<"\nsnt> "<<p->data;
		}
		p = p->next;
	}
	return cnt;
}

//dem s_am s_0 s_duong

void dem_sss(List F){
	List p = F;
	if(F == NULL){
		cout<<"isEmpty";
		return ;
	}
	int INIT_AM = 0, INIT_DUONG = 0, INIT_BANG_KHONG = 0;
	while(p){
		if(p->data < 0){
			INIT_AM ++;
		}
		if(p->data > 0){
			INIT_DUONG ++;
		}
		if(p->data == 0){
			INIT_BANG_KHONG ++;
		}
		p = p->next;
	}
	cout<<"\n am: "<<INIT_AM;
	cout<<"\n 0: "<<INIT_BANG_KHONG;
	cout<<"\n duong: "<<INIT_DUONG;
}

//dem so = x

int dem_x(int x, List F){
	int cnt = 0;
	List p = F;
	while(p){
		if(p->data == x){
			cnt ++;
		}
		p = p->next;
	}
	return cnt;
}

//in node 
void printF(List F){
	List q = F;
	while(q != NULL){
		cout<<q->data<<" ";
		q = q->next;
	}
}

main(){
	int a,x; List F = NULL;
	while(1){
		cin>>a;
		if(a == 0){
			 printF(F); break;
		}else if(a % 2 == 0){
			 insertFirst(a,F);
		}else{
			insertLast(a,F);
		}
	}
//	delFirst(F);
	 cout<<"\ndanh sach sau khi xoa: ";printF(F);
	cout<<"\ncount :"<<count(F);
	cout<<"\nMax : "<<findMax(F);
	cout<<"\nSum : "<<sum(F);
	cout<<"\ncheck ng_to :" << count_pr(F);
	dem_sss(F);
	cout<<"\nnhap x = "; cin>>x;
	cout<<dem_x(x,F);
}
