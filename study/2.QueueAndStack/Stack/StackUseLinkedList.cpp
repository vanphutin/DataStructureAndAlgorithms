#include <iostream>
using namespace std;

struct node {
    int data;
    node *next;
};

// Function to create a new node
node *makeNode(int x) {
    node *newNode = new node;
    newNode->data = x;
    newNode->next = NULL;
    return newNode;
}

// Function to push an element onto the stack
void push(node **top, int x) {
    node *newNode = makeNode(x);
    newNode->next = *top;
    *top = newNode;
}

// Function to pop an element from the stack
void pop(node **top) {
    if (*top != NULL) {
        node *temp = *top;
        *top = (*top)->next;
        delete temp;
    }
}

// Function to get the top element of the stack
int top(node *top) {
    if (top != NULL) {
        return top->data;
    }
    return -1;  // Return -1 if stack is empty
}

// Function to get the size of the stack
int size(node *top) {
    int ans = 0;
    while (top != NULL) {
        ans++;
        top = top->next;
    }
    return ans;
}

// Main function
int main() {
    node *st = NULL;
    while (1) {
        cout << "-------------------------------\n";
        cout << "1. push\n";
        cout << "2. pop\n";
        cout << "3. top\n";
        cout << "4. size\n";
        cout << "0. Thoat\n";
        cout << "-------------------------------\n";
        int lc; cin >> lc;
        if (lc == 1) {
            int x; cout << "Nhap x: "; cin >> x;
            push(&st, x);
        } else if (lc == 2) {
            pop(&st);
        } else if (lc == 3) {
            int topElement = top(st);
            if (topElement == -1) {
                cout << "EMPTY\n";
            } else {
                cout << topElement << endl;
            }
        } else if (lc == 4) {
            cout << "\nKich thuoc cua Stack: " << size(st) << endl;
        } else {
            break;
        }
    }
    return 0;
}

