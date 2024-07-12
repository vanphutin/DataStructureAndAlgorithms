#include <iostream>

using namespace std;
typedef struct node node;
struct node{
	int data;
	node *left;
	node *right;
//	node(int x){
//		data = x;
//		left = right = NULL;
//	}
};

node *makeNode(int x){
	node *newNode = new node;
	newNode->data = x;
	newNode->left = newNode->right = NULL;
	return newNode;
}
int main(){
	node *root = makeNode(1);
	root->left = makeNode(2);
	root->right = makeNode(3);
	root->left->left = makeNode(4);
	root->left->right = makeNode(5);
	cout<<root->left->right->data <<" "; //5
}
