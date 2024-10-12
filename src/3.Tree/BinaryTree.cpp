#include <iostream>
using namespace std;

struct node{
	int data;
	node *left, *right;
};

typedef node* Tree;

Tree createNode(int x){
	Tree p = new node;
	p->data = x;
	p->left = NULL;
	p->right = NULL;
	return p;
}

void insert(int x, Tree &root){
	if(root == NULL){
		root = createNode(x);
	}else if(x < root->data){
		insert(x,root->left);
	}else{
		insert(x, root->right);
	}
}

void inorder(Tree root){
	
}

