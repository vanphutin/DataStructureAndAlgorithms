#include <iostream>
using namespace std;

#define MAX_SIZE 100

int n = 0, stack_arr[MAX_SIZE];

int size() {
    return n;
}

void push(int x){ //Them phan tu
	if(n < MAX_SIZE){
		stack_arr[n] = x;
		++n;
	}else{
		cout << "Stack Overflow\n";
	}
}

void pop() { //Loai bo phan tu
    if (n >= 1) {
        --n;
    } else {
        cout << "Stack Underflow\n";
    }
}

int top() {  //Phan tu dau tien
    if (n > 0) {
        return stack_arr[n - 1];
    } else {
        cout << "Stack is empty\n";
        return -1;  
    }
}

void duyet() {
    cout << "Cac phan tu trong Stack la:\n";
    for (int i = 0; i < n; ++i) {
        cout << stack_arr[i] << ' ';
    }
    cout << endl;
}

int main() {
    while (1) {
        cout << "-------------------------------\n";
        cout << "1. push\n";
        cout << "2. pop\n";
        cout << "3. top\n";
        cout << "4. size\n";
        cout << "5. duyet\n";
        cout << "0. Thoat\n";
        cout << "-------------------------------\n";
        int lc; cin >> lc;
        if (lc == 1) {
            int x; cout << "Nhap x: "; cin >> x;
            push(x);
        } else if (lc == 2) {
            pop();
        } else if (lc == 3) {
            if (n == 0) {
                cout << "EMPTY\n";
            } else {
                cout << top() << endl;
            }
        } else if (lc == 4) {
            cout << "\nKich thuoc cua Stack: " << size() << endl;
        } else if (lc == 5) {
            duyet();
        } else {
            break;
        }
    }
    return 0;
}

