#include <iostream>
using namespace std;

int UCLN(int a, int b) {
    if (a == b)
        return a;
    if (a > b)
        return UCLN(a - b, b);
    return UCLN(a, b - a);
}

int BCNN(int a, int b) {
    return a * b / UCLN(a, b);
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << "UCLN: " << UCLN(a, b);
    cout << "\nBCNN: " << BCNN(a, b);
    return 0;
}

