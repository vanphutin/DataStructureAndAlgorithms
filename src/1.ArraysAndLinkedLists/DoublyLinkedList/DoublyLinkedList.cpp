#include <iostream>

using namespace std;

struct node {
    int data;
    node *next;
    node *prev;
};

typedef struct node node;

node *makeNode(int x) {
    node *newNode = new node;
    newNode->data = x;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

void duyet(node *head) {
    while (head != NULL) {
        cout << head->data << ' ';
        head = head->next;
    }
    cout << endl;
}

void addHead(node *&head, int x) {
    node *newNode = makeNode(x);
    if (head != NULL) {
        newNode->next = head;
        head->prev = newNode;
    }
    head = newNode;
}

void addTail(node *&head, int x) {
    node *newNode = makeNode(x);
    if (head == NULL) {
        head = newNode;
    } else {
        node *temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->prev = temp;
    }
}

void deleteNode(node *&head, int x) {
    node *temp = head;
    while (temp != NULL && temp->data != x) {
        temp = temp->next;
    }
    if (temp == NULL) return; 

    if (temp->prev != NULL) {
        temp->prev->next = temp->next;
    } else {
        head = temp->next; 
    }

    if (temp->next != NULL) {
        temp->next->prev = temp->prev;
    }

    delete temp;
}

void deleteList(node *&head) {
    node *temp;
    while (head != NULL) {
        temp = head;
        head = head->next;
        delete temp;
    }
}

int main() {
    node *head = NULL;
    
    addHead(head, 2);
    addHead(head, 1);
    addTail(head, 3);
    addTail(head, 4);
    
    cout << "Danh sach sau khi them cac phan tu: ";
    duyet(head);

    deleteNode(head, 3);
    cout << "Danh sach sau khi xoa node 3: ";
    duyet(head);

    deleteList(head);
    cout << "Danh sach sau khi xoa toan bo: ";
    duyet(head);

    return 0;
}

