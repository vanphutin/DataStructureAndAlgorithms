#include<iostream>
using namespace std;

void mergeArrays(int A[], int B[], int M, int N, int C[]) {
    int i = 0, j = 0, k = 0;
    
    while (i < M && j < N) {
        if (A[i] < B[j]) {
            C[k++] = A[i++];
        } else {
            C[k++] = B[j++];
        }
    }

    while (i < M) {
        C[k++] = A[i++];
    }

    while (j < N) {
        C[k++] = B[j++];
    }
}

int main() {
    int M, N;
    cin >> M >> N;

    int A[M], B[N];

    for (int i = 0; i < M; i++) {
        cin >> A[i];
    }

    for (int i = 0; i < N; i++) {
        cin >> B[i];
    }

    int C[M+N];

    mergeArrays(A, B, M, N, C);

    cout << M + N << endl;

    for (int i = 0; i < M + N; i++) {
        cout << C[i] << " ";
    }
    cout << endl;

    return 0;
}

