#include <iostream>
using namespace std;

//FIFO : Vao Truoc Ra Truoc
int a[10000], maxN = 10000, n = 0;

int size() {
    return n;
}

bool empty() {
    return n == 0;
}

void push(int x) {
    if (n == maxN) return;
    a[n] = x;
    n++;
}

void pop() {
    if (n == 0) return;
    for (int i = 0; i < n - 1; i++) {
        a[i] = a[i + 1];
    }
    n--;
}

int front() {
    if (n == 0) {
        cout << "Queue is empty" << endl;
        return -1;
    }
    return a[0];
}

void display() {
    if (n == 0) {
        cout << "Queue is empty" << endl;
        return;
    }
    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }
    cout << endl;
}

int main() {
    while (1) {
        cout << "-------------------------------\n";
        cout << "1. push\n";
        cout << "2. pop\n";
        cout << "3. front\n";
        cout << "4. size\n";
        cout << "5. empty\n";
        cout << "6. display\n"; 
        cout << "0. Exit\n";
        cout << "-------------------------------\n";
        int lc;
        cin >> lc;
        if (lc == 1) {
            int x;
            cin >> x;
            push(x);
        } else if (lc == 2) {
            pop();
        } else if (lc == 3) {
            cout << front() << endl;
        } else if (lc == 4) {
            cout << size() << endl;
        } else if (lc == 5) {
            cout << (empty() ? "Queue is empty" : "Queue is not empty") << endl;
        } else if (lc == 6) {
            display();
        } else if (lc == 0) {
            break;
        } else {
            cout << "Invalid option. Please try again." << endl;
        }
    }
    return 0;
}

