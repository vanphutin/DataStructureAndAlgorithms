#include <iostream>
using namespace std;

bool kiemTraTatCaSoChan(int n) {
    if (n == 0) return true;

    int lastDigit = n % 10;

    if (lastDigit % 2 != 0) return false;

    return kiemTraTatCaSoChan(n / 10); 
}

int main() {
    long long n;
    cin >> n;

    if (kiemTraTatCaSoChan(n)) {
        cout << "YES" << endl;
    } else {
        cout << "NO" << endl;
    }

    return 0;
}

