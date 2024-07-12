#include <iostream>
using namespace std;

struct node {
    int data;
    struct node *next;
};

typedef struct node node;

node *makeNode(int x) {
    node *newNode = new node();
    newNode->data = x;
    newNode->next = NULL;
    return newNode;
}

void push(node **queue, int x) {
    node *newNode = makeNode(x);
    if (*queue == NULL) {
        *queue = newNode;
        return;
    }
    node *temp = *queue;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = newNode;
}

void pop(node **queue) {
    if (*queue == NULL) return;
    node *temp = *queue;
    *queue = (*queue)->next;
    delete temp;
}

int size(node *queue) {
    int ans = 0;
    while (queue != NULL) {
        ++ans;
        queue = queue->next;
    }
    return ans;
}

bool empty(node *queue) {
    return queue == NULL;
}

int front(node *queue) {
    if (queue == NULL) {
        cout << "Queue is empty!" << endl;
        return -1; // Or some error code
    }
    return queue->data;
}

void printQueue(node *queue) {
    if (queue == NULL) {
        cout << "Queue is empty!" << endl;
        return;
    }
    while (queue != NULL) {
        cout << queue->data << " ";
        queue = queue->next;
    }
    cout << endl;
}

int main() {
    node *queue = NULL;
    while (1) {
        cout << "-------------------------------\n";
        cout << "1. push\n";
        cout << "2. pop\n";
        cout << "3. front\n";
        cout << "4. size\n";
        cout << "5. traverse\n";
        cout << "0. Exit\n";
        cout << "-------------------------------\n";
        int lc; cin >> lc;
        if (lc == 1) {
            int x; cout << "Enter x: "; cin >> x;
            push(&queue, x);
        } else if (lc == 2) {
            pop(&queue);
        } else if (lc == 3) {
            if (empty(queue)) {
                cout << "Queue is empty\n";
            } else {
                cout << "Front element: " << front(queue) << endl;
            }
        } else if (lc == 4) {
            cout << "Queue size: " << size(queue) << endl;
        } else if (lc == 5) {
            printQueue(queue);
        } else {
            break;
        }
    }
    return 0;
}

