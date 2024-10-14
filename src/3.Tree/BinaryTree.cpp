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

void inorder(Tree root){ // Left - Node - Right
	if(root != NULL){
		inorder(root->left);
		cout<<root->data<<" ";
		inorder(root->right);
	}
}

void preorder(Tree root){ // Node - Left - Right
	if(root != NULL){
		cout<<root->data<<" ";
		preorder(root->left);
		preorder(root->right);
	}
}

void postorder(Tree root){ // Left - Right - Node
	if(root != NULL){
		postorder(root->left);
		postorder(root->right);
		cout<<root->data<<" ";
	}
}

main(){
	Tree root = NULL;
	int value, chooice;
	insert(10,root);
	insert(7,root);
	insert(9,root);
	insert(21,root);
	insert(30,root);
	insert(5,root);
	insert(8,root);
	insert(15,root);
	cout<<"LRN\n";
	inorder(root);
	cout<<"\nNLR\n";
	preorder(root);
	cout<<"\nLRN\n";
	postorder(root);
	
}

