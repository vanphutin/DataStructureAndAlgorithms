#include <iostream>

using namespace std;	

struct Node{
	int data;
	Node *left, *right;
};

typedef Node* tree;

tree createTree(int x){
	tree p = new Node;
	p->data = x;
	p->left= NULL;
	p->right = NULL;
	return p;
} 

void insert(int x, tree &root){
	if(root == NULL){
		root = createTree(x);
	}else if(x < root->data){
		insert(x, root->left);
	}else{
		insert(x,root->right);
	}
}

//nlr
void NLR(tree root){
	if(root != NULL){
		cout<<root->data<<" ";
		NLR(root->left);
		NLR(root->right);
	}
}
//LNR
void LNR(tree root){
	if(root != NULL){
		LNR(root->left);
		cout<<root->data<<" ";
		LNR(root->right);
	}
}

// LRN
void LRN(tree  root){
	if(root != NULL){
		LRN(root->left);
		LRN(root->right);
		cout<<root->data<<" ";
	}
}
//dem node la : node la là node khong co node con
int demLa(tree root){
	if(root == nullptr) return 0;
	if(root->left == nullptr && root->right == nullptr) return 1;
	return demLa(root->left) + demLa(root->right);
}
// do cao cua cay 
int doCaoCuaCay(tree root ){
	if(root == nullptr) return 0;
	int heightLeft = doCaoCuaCay(root->left);
	int heightRight = doCaoCuaCay(root->right);
	
	return 1 + max(heightLeft, heightRight);
}

bool isFullBinaryTree(tree root){
	if(root == nullptr) return false;
	if(root->left == nullptr && root->right == nullptr) return true;
	if(root->left != nullptr && root->right != nullptr ){
		return isFullBinaryTree(root->left) && isFullBinaryTree(root->right);
	}
	return false;
}
int main(){
	tree root = NULL;
	insert(60,root);
	insert(11,root);
	insert(77,root);
	insert(55,root);
	insert(99,root);
	insert(33,root);
	insert(44,root);
	insert(22,root);
	insert(38,root);
	insert(66,root);
	insert(88,root);
	insert(79,root);
	cout<<"NLR\n";
	NLR(root);
	cout<<"\nLRN\n";
	LNR(root);
	cout<<"\nLRN\n";
	LRN(root);	
	cout<<"\ndem la: "<<demLa(root);
	cout<<"\ndo cao cua cay "<<doCaoCuaCay(root);
	cout<<"\nisFullBinaryTree ?: ";
	if(isFullBinaryTree(root)){
		cout<<"Y";
	}else{
		cout<<"N";
	}
	return 0;
}
