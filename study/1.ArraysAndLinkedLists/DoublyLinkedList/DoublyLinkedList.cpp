#include <iostream>

using namespace std;

struct node{
	int data;
	node *next;
	node *prev;
};

typedef struct node node;

node *makeNode(int x){
	node *newNode = new node;
	newNode->data = x;
	newNode->next = NULL;
	newNode->prev = NULL;
	return newNode;
}

void duyet(node *head){
	while(head != NULL){
		cout<<head->data<<' ';
		head = head->next;
	}
	cout<<endl;
}

int main(){
	return 0;
}
