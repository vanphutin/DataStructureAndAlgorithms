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
int height(node *root){
	if(root == NULL) return 0;
	return max(height(root->left), height(root->right))+1;
}
int check(node *root, int cnt, int h){
	if(root == NULL) return 1;
	if(!root->left && !root->right){
		return cnt == h;
	}
	return check(root->left, cnt + 1, h) && check(root->right, cnt + 1, h);
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
	int h = height(root);
	if(check(root, 1,h)) cout<<"Yes";
	else cout<<"NO";
}
