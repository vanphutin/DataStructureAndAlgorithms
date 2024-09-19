#include <iostream>
using namespace std;

void inMangTraiQuaPhai(int A[], int i, int N) {
    if (i == N)  
        return;
    cout << A[i] << " ";  
    inMangTraiQuaPhai(A, i + 1, N);  
}

void inMangPhaiQuaTrai(int A[], int i) {
    if (i < 0) 
        return;
    cout << A[i] << " ";  
    inMangPhaiQuaTrai(A, i - 1);  
}

int main() {
    int N;
    cin >> N; 

    int A[N];
    for (int i = 0; i < N; i++) {
        cin >> A[i]; 
    }

    inMangTraiQuaPhai(A, 0, N);
    cout << endl; 

    inMangPhaiQuaTrai(A, N - 1);
    cout << endl;  

    return 0;
}

