#include <iostream>
using namespace std;

bool kiemTraChan(long long N) {
    if (N < 10) {
        return N % 2 == 0;
    }
    
    if (N % 10 % 2 != 0) {
        return false;
    }
    
    return kiemTraChan(N / 10);
}

int main() {
    long long N;
    cin >> N;
    
    if (kiemTraChan(N)) {
        cout << "YES" << endl;
    } else {
        cout << "NO" << endl;
    }

    return 0;
}

