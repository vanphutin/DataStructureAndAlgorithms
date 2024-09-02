#include <iostream>
using namespace std;

void inTuTraiQuaPhai(int n) {
    if (n < 10) {
        cout << n << " ";
        return;
    }

    inTuTraiQuaPhai(n / 10);
    cout << n % 10 << " ";
}

void inTuPhaiQuaTrai(int n) {
    if (n < 10) {
        cout << n << " ";
        return;
    }

    cout << n % 10 << " ";
    inTuPhaiQuaTrai(n / 10);
}

int main() {
    int n;
    cin >> n;

    inTuTraiQuaPhai(n);
    cout << endl;

    inTuPhaiQuaTrai(n);
    cout << endl;

    return 0;
}

