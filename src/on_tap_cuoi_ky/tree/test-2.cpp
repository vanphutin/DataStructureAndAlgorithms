#include <iostream>
using namespace std;

struct Node{
	int data;
	Node *left , *right;
};

typedef Node* Tree;

Tree CreateNode(int x){
	Tree root;
	root = new Node;
	root->data = x;
	root->left = root->right = NULL;
	return root;
}

void insert(int x , Tree &root){
	if(root == nullptr){
		root = CreateNode(x);
	}else if (x < root->data){
		insert(x, root->left);
	}else {
		insert(x, root->right);
	}
}

// LNR
void inorder(Tree root){
	if(root != nullptr){
		inorder(root->left);
		cout<<root->data<<" ";
		inorder(root->right);
	}
}

// NLR
void preorder(Tree root){
	if(root != nullptr){
		cout<<root->data<<" ";
		preorder(root->left);
		preorder(root->right);
	}
}

//LRN
void postorder(Tree root){
	if(root != nullptr){
		postorder(root->left);
		postorder(root->right);
		cout<<root->data<<" ";
	}
}

// tim kiem tren cay nhi phan
bool searchNode(int key, Tree root){
	if(root == nullptr) return false ;
	if(root->data == key){
		return true;
	}
	else if(key < root->data){
		return searchNode(key, root->left);
	}else{
		return searchNode(key, root->right);
	}
	
}

//tim gia tri nho nhat
void findMin(Tree root){
	if(root == nullptr) return;
	while(root->left != nullptr){
		root = root->left;
	}
	cout<<root->data;
}

//tim gia tri lon nhat
void findMax(Tree root){
	if(root == nullptr) return ;
	while(root->right){
		root = root->right;
	}
	cout<<root->data;
}

// dem so luong nut
int countNode(Tree root){
	if(root == nullptr) return 0;
	return 1 + countNode(root->left) + countNode(root->right);
}

//tinh chieu cao cua cay
int heightTree(Tree root){
	if(root == nullptr) return 0;
	return 1 + max(heightTree(root->left), heightTree(root->right));
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
	cout<<"LNR\n";
	inorder(root);
	cout<<"\nNLR\n";
	preorder(root);
	cout<<"\nLRN\n";
	postorder(root);
	if(searchNode(5,root)){
		cout<<"Y\n";
	}else{
		cout<<"N\n";
	}
	findMin(root);
	findMax(root);
	cout<<"\nsl "<<countNode(root);
	cout<<"\nheight "<<heightTree(root);
	
}
