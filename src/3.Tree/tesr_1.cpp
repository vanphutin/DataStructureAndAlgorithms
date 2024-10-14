#include <iostream>
using namespace std;

struct node{
	int data;
	node *left, *right;
};

typedef node* tree;

tree createNode(int x){
	tree p = new node;
	p->data = x;
	p->left = NULL;
	p->right = NULL;
	
	return p;
}

void insert(int x, tree &root){
	if(root == NULL){
		root = createNode(x);
	}else if(x  < root->data){
		insert(x, root->left);
	}else{
		insert(x,root->right);
	}
}
void NLR(tree root){
	if(root != NULL){
		cout<<root->data<<" ";
		NLR(root->left);
		NLR(root->right);
	}
}

void LNR(tree root){
	if(root != NULL){
		LNR(root->left);
		cout<<root->data<<" ";
		LNR(root->right);
	}
}

void LRN(tree root){
	if(root != NULL){
		LRN(root->left);
		LRN(root->right);
		cout<<root->data<<" ";
	}
}

int main(){
	tree root = NULL;
	insert(10,root);
	insert(7,root);
	insert(9,root);
	insert(21,root);
	insert(30,root);
	insert(5,root);
	insert(8,root);
	insert(15,root);
	cout<<"LRN\n";
	LRN(root);
	cout<<"\nNLR\n";
	NLR(root);
	cout<<"\nLRN\n";
	LRN(root);
}

