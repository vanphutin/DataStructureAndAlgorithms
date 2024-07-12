#include <bits/stdc++.h>

using namespace std;

int main(){
	cout<<"hello";
	return 0;
}

//tao node
struct node {
	int data;
	struct node *next;
};

typedef struct node node;

node *taoNode(int x){
	node *newNode = new node();
	newNode->data = x;
	newnode->next = NULL;
	return newNode;
	
}
