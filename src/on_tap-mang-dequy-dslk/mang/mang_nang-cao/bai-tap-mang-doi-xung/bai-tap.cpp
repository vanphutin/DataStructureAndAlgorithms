#include <iostream>
using namespace std;

bool mangDoiXung(int a[], int left, int right) {
    if (left > right) return true;  // Base case: if crossed over, it's symmetric
    if (a[left] != a[right]) return false;  // If elements do not match, it's not symmetric
    return mangDoiXung(a, left + 1, right - 1);  // Move inward from both ends
}

int main() {
    int a[10001], n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    mangDoiXung(a, 0, n - 1) ? cout << "YES" : cout << "NO";

    return 0;
}

