#include <iostream>
using namespace std;

struct Node{
	int data;
	Node *left, *right;
};

typedef Node* Tree;

Tree CreateNode(int x){
	Tree p;
	p = new Node;
	p->data = x;
	p->left = p->right = nullptr;
	return p;
}

void insert(int x, Tree &root){
	if(root == NULL ){
		root = CreateNode(x);
	}else if(x < root->data){
		insert(x, root->)
	}
}
