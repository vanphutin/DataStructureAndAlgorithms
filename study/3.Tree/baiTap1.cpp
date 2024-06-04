#include <iostream>
#include <map>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
    
    Node(int x) : data(x), left(NULL), right(NULL) {}
};

void inorderTraversal(Node* root) {
    if (root == NULL) {
        return;
    }
    inorderTraversal(root->left);
    cout << root->data << " ";
    inorderTraversal(root->right);
}

int main() {
    int N;
    cin >> N;
    
    map<int, Node*> nodes;
    
    for (int i = 0; i < N; ++i) {
        int x, y;
        char z;
        cin >> x >> y >> z;
        
        if (nodes.find(x) == nodes.end()) {
            nodes[x] = new Node(x);
        }
        if (nodes.find(y) == nodes.end()) {
            nodes[y] = new Node(y);
        }
        
        if (z == 'L') {
            nodes[x]->left = nodes[y];
        } else if (z == 'R') {
            nodes[x]->right = nodes[y];
        }
    }
    
    // Assuming 1 is always the root node
    Node* root = nodes[1];
    
    inorderTraversal(root);
    
    return 0;
}

