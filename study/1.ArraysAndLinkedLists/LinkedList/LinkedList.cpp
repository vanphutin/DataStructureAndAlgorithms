#include <bits/stdc++.h>
typedef struct node node; // cho phep su dung node thay vi struct node
using namespace std;

node* makeNode(int x);
void duyet(node *head);
int dem(node *head);
void themNode(node **head, int x);
void soChan(node *head);
int timGiaTriLonNhat(node *head);

int main(){
	node *head = NULL;
	for(int i = 0 ; i <= 5 ; i++){
		themNode(&head,i);
	}
	duyet(head);
	cout<<"\nsize: "<<dem(head);
	soChan(head);
	cout<<"\nGia tri lon nhat trong danh sach la: "<<timGiaTriLonNhat(head);
	return 0;
}

//ham tao node moi
struct node{
    int data; 
    struct node *next;
};

node* makeNode(int x){
	//Trong c : node *newNode = (node)malloc(sizeof(node)); 
	node *newNode = new node();
	newNode->data = x;
	newNode->next = NULL;
	return newNode;
}

//ham duyet node 
void duyet(node *head){
	while(head != NULL){
		cout<<head->data<<' ';
		head = head->next; // dia chi cua node tiep theo 
	}
}

//ham dem so node 
int dem(node *head){
	int count = 0;
	while(head != NULL){
		++count;
		head = head->next;
	}
	return count;
}

//ham them node vao dau danh sach
void themNode(node **head, int x){
	node *newNode = makeNode(x); //xin cap phat them 
	// buoc 1 : cho phan next cua newNode -> *head 
	newNode->next = *head; //*head => dia chi cua node trong dslk
	// buoc 2 : cap nhat node *head->newNode
	*head = newNode;
}

//in so chan
void soChan(node *head){
	cout<<"\nCac so chan la: ";
	while(head != NULL){
		if(head->data % 2 == 0){
			cout<<head->data<<' ';
			
		}
		head = head->next;
		
	}
}

//tim gia tri lon nhat
int timGiaTriLonNhat(node *head){
	int flag = 0;
	while(head != NULL){
		if(head->data > flag){
			flag = head->data ;
		}
		head = head->next;
	}
	return flag;
}



