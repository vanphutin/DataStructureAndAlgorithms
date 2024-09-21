#include <iostream>

using namespace std;

// Define node structure
struct node {
	int data;
	node *left;
	node *right;
};

// Create a new node
node *makeNode(int x){
	node *newNode = new node;
	newNode->data = x;
	newNode->left = NULL;
	newNode->right = NULL;
	return newNode;
}

void inorder(node *root){
	if(root != NULL){
		inorder(root->left);       // Traverse the left subtree
		cout << root->data << " "; // Print the current node's data
		inorder(root->right);      // Traverse the right subtree
	}
}

// tim node lon nhat

int findMax(node *root){
	if(root == NULL){
		cout<<"invalid"<<endl;
		return -1;
	}
	node* current = root;
	while(current->right != NULL){
		current = current->right;
	}
	return current->data;
}

int main(){
    // Create a sample tree
    node *root = makeNode(10);
    root->left = makeNode(5);
    root->right = makeNode(20);
    root->left->left = makeNode(3);
    root->left->right = makeNode(7);

    // Inorder traversal
    cout << "Inorder traversal: ";
    inorder(root);
    cout<<"\nMAX"<<findMax(root);
    cout << endl;

    return 0;
}

