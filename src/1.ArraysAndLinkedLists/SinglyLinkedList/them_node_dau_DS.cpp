#include <iostream>
using namespace std ;

// make node 
struct node {
	int data;
	node* next;
};

typedef node* List ;

void insertF(int x , List &F){ // F la gia tri tham chieu 
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
void printF(List F){
	List p = F ; // gan p la gia tri dau tien trong danh sach lien ket !
	while(p != NULL){
		cout<<" "<<p->data;
		p = p->next;
	}
}
// trung binh cong cac so le
float tbc_so_le(List F){
	int tbc = 0, cnt_le = 0;
	
	List p = F; // gia tri p hien tai la gia tri dau tien
	while(p != NULL){
		if(p->data % 2 != 0){
			tbc += p->data;
			cnt_le++;
		}
		p = p->next;
	}
	return (float) tbc  / cnt_le;
}
int dem_chan(List F){
	int cnt = 0;
	List p = F;
	while(p){ // khi p != NULl
		if(p->data % 2 == 0){ // p tro dem data -> neu data chia het cho 2
			cnt ++; // tang cnt len 1
		}
		p = p->next; // tro den node tiep theo
	}
	return cnt;
}

int main(){
	int a; List F = NULL;
	while(1){
		cin>>a;
		if( a == 0){
			printF(F); break;
		}else {
			insertF(a,F);
		}
	}
	cout<<"\ndem chan "<<dem_chan(F);
	cout<<"\nTBC so le "<<tbc_so_le(F);
	return 0;
}
