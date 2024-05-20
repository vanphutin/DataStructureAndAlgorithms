#include <iostream>
using namespace std;

#define MAX_SIZE 100

class Stack {
private:
    int arr[MAX_SIZE];
    int top_index;

public:
    Stack() {
        top_index = -1;
    }

    bool isEmpty() {
        return top_index == -1;
    }

    bool isFull() {
        return top_index == MAX_SIZE - 1;
    }

    void push(int value) {
        if (isFull()) {
            cout << "Ngan xep day, khong the them phan tu!" << endl;
            return;
        }
        arr[++top_index] = value;
        cout << "Da them " << value << " vao ngan xep." << endl;
    }

    void pop() {
        if (isEmpty()) {
            cout << "Ngan xep rong, khong the lay phan tu!" << endl;
            return;
        }
        cout << "Da lay " << arr[top_index--] << " ra khoi ngan xep." << endl;
    }

    int top() {
        if (isEmpty()) {
            cout << "Ngan xep rong." << endl;
            return -1;
        }
        return arr[top_index];
    }

    int size() {
        return top_index + 1;
    }

    void printList() {
        if (isEmpty()) {
            cout << "Ngan xep rong." << endl;
            return;
        }
        cout << "Danh sach cac phan tu trong ngan xep:" << endl;
        for (int i = top_index; i >= 0; i--) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Stack myStack;

    int choice, value;
    char cont;

    do {
        cout << "Chon thao tac:\n";
        cout << "1. Them phan tu\n";
        cout << "2. Loai bo phan tu\n";
        cout << "3. Phan tu dau tien\n";
        cout << "4. Kich thuoc ngan xep\n";
        cout << "5. In danh sach\n";
        cout << "Nhap lua chon cua ban: ";
        cin >> choice;

        switch(choice) {
            case 1:
                cout << "Nhap gia tri muon them: ";
                cin >> value;
                myStack.push(value);
                break;
            case 2:
                myStack.pop();
                break;
            case 3:
                cout << "Phan tu dau tien cua ngan xep: " << myStack.top() << endl;
                break;
            case 4:
                cout << "So luong phan tu trong ngan xep: " << myStack.size() << endl;
                break;
            case 5:
                myStack.printList();
                break;
            default:
                cout << "Lua chon khong hop le!" << endl;
        }

        cout << "Tiep tuc (y/n)? ";
        cin >> cont;
    } while(cont == 'y' || cont == 'Y');

    return 0;
}

