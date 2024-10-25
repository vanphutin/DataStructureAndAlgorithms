#include <iostream>
using namespace std;

struct Node{
	int data;
	Node *left, *right;
};
typedef Node* Tree;

Tree createNode(int x){
	Tree root = new Node;
	root->data = x;
	root->left = root->right = nullptr;
	return root;
}
void insert(int x, Tree &root){
	if(root == nullptr){
		root = createNode(x);
	}else if(x < root->data){
		insert(x, root->left);
	}else{
		insert(x, root->right);
	}
}

//LNR
void in_order(Tree root){
	if(root != nullptr){
		in_order(root->left);
		cout<<root->data<<" ";	
		in_order(root->right);
	}	
}

// LRN 
void post_order(Tree root){
	if(root != nullptr){
		post_order(root->left);
		post_order(root->right);
		cout<<root->data<<" ";	
	}
}

//NLR
void pre_order(Tree root){
	if(root != nullptr){
		cout<<root->data<<" ";
		pre_order(root->left);
		pre_order(root->right);	
	}
}

bool searchTree(int key, Tree root){
	if(root == nullptr) return false;
	if(key == root->data){
		return true;
	}
	if(key < root->data){
		return searchTree(key, root->left);
	}else{
		return searchTree(key, root->right);
	}
}
//Tree findMin(Tree root) {
//    while (root->left != nullptr) root = root->left;
//    return root;
//}
//Tree deleteNode(Tree root, int x) {
//    if (root == nullptr) return root;
//    if (x < root->data) {
//        root->left = deleteNode(root->left, x);
//    } else if (x > root->data) {
//        root->right = deleteNode(root->right, x);
//    } else {
//        if (root->left == nullptr) {
//            Tree temp = root->right;
//            delete root;
//            return temp;
//        } else if (root->right == nullptr) {
//            Tree temp = root->left;
//            delete root;
//            return temp;
//        }
//        Tree temp = findMin(root->right);  // Tìm nút nh? nh?t ? nhánh ph?i
//        root->data = temp->data;
//        root->right = deleteNode(root->right, temp->data);
//    }
//    return root;
//}

Tree findMin(Tree root){
	while(root->left != nullptr){
		root = root->left;
	}
	return root;
}

Tree deleteNode(Tree root, int x){
	if(root == nullptr) return root;
	
	// tim
	if(x < root->data){
		root->left = deleteNode(root->left, x);
	}else if(x > root->data){
		root->right = deleteNode(root->right, x);
	}else{
		if(root->left == nullptr){
			Tree temp = root->right;
			delete root;
			return temp;
		}else if(root->right == nullptr){
			Tree temp = root->left;
			delete root;
			return temp;
		}
		Tree temp = findMin(root->right);
		root->data = temp->data;
		root->right = deleteNode(root->right, temp->data);
	}
	return root;
}















int main(){
	Tree root = nullptr;
	insert(10,root);
	insert(7,root);
	insert(9,root);
	insert(21,root);
	insert(30,root);
	insert(5,root);
	insert(8,root);
	insert(15,root);
	in_order(root);
	cout<<endl;
	post_order(root);
	cout<<endl;
	pre_order(root);
	deleteNode(root, 10);
	cout<<endl;
	in_order(root);
}
