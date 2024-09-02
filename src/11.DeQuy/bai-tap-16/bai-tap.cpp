#include <iostream>
using namespace std;
const int INITIAL_MAX = 0; 
const int INITIAL_MIN = 9; 
void findMaxMinDigit(int N, int &max_digit, int &min_digit) {
    if (N < 10) {
        if (N > max_digit) max_digit = N;
        if (N < min_digit) min_digit = N;
        return;
    }

    int current_digit = N % 10;

    if (current_digit > max_digit) max_digit = current_digit;
    if (current_digit < min_digit) min_digit = current_digit;

    findMaxMinDigit(N / 10, max_digit, min_digit);
}

int main() {
    int N; cin>>N;

    int max_digit = INITIAL_MAX;
    int min_digit = INITIAL_MIN;

    findMaxMinDigit(N, max_digit, min_digit);

    cout << "MAX: " << max_digit << endl;
    cout << "MIN: " << min_digit << endl;

    return 0;
}

