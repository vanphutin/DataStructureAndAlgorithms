#include <iostream>
using namespace std;

struct node {
    int data;
    node *next;
};
typedef node *list;

void insertFirst(int x, list &f) {
    list p = new node;
    p->data = x;
    p->next = f;
    f = p;
}

void delFirst(list &f) {
    if (f != NULL) {
        list p = f;
        f = f->next;
        delete p;
    }
}

void deleteLast(list &f) {
    if (f == NULL) {
        return; // If the list is empty, do nothing.
    }
    if (f->next == NULL) {
        // If there is only one node, delete it and set the list to NULL.
        delete f;
        f = NULL;
        return;
    }

    list p = f;
    // Traverse until the second-to-last node
    while (p->next->next != NULL) {
        p = p->next;
    }
    // Delete the last node and set the next of second-to-last to NULL
    delete p->next;
    p->next = NULL;
}

void insertLast(int x, list &f) {
    list p = new node;
    p->data = x;
    p->next = NULL;
    if (f == NULL) {
        f = p;
    } else {
        list temp = f;
        while (temp->next) {
            temp = temp->next;
        }
        temp->next = p;
    }
}

void printList(list f) {
    list p = f;
    while (p) {
        cout << "\nData: " << p->data;
        p = p->next;
    }
}

int main() {
    int a;
    list f = NULL;
    while (1) {
        cin >> a;
        if (a == 0) {
            printList(f);
            break;
        } else if (a % 2 ==0 ) {
            insertFirst(a, f);
        } else {
            insertLast(a, f);
        }
    }
    
    // Free memory before exiting
    while (f != NULL) {
        delFirst(f);
    }

    return 0;
}


