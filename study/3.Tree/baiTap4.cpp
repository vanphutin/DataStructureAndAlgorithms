#include <bits/stdc++.h>
using namespace std;

struct node{
	int data;
	node *left, *right;
	
	node(int x){
		data = x;
		right = left = NULL;
	}
};

void makeNode(node *root, int u, int v , char c){
	if(c == 'L') root->left = new node(v);
	else{
		root->right = new node(v);
	}
}
void insert(node *root, int u, int v, int c){
	if(root == NULL) return;
	if(root->data == u) makeNode(root,u,v,c);
	else{
		insert(root->left, u,v,c);
		insert(root->right,u,v,c);
	}
}
int cnt = 0;
void inOrder(node *root){
	if(root == NULL) return;
	if(!root->left && !root->right) cnt++;
	inOrder(root->left);
	inOrder(root->right);
}
int main(){
	node *root = NULL;
	int n; cin >> n;
	for(int i = 0 ; i < n ; i++){
		int x,y; char c;
		cin >> x >> y >> c;
		if(root == NULL){
			root = new node(x);
			makeNode(root, x,y,c);
		}else{
			insert(root,x,y,c);
		}
	}
	inOrder(root);
	cout<< cnt;
}
