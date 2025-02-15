#include <iostream>

using namespace std;

// Function to input array elements
void nhap(int a[], int n) {
    cout << "Nhap cac phan tu cua mang:\n";
    for (int i = 0; i < n; i++) {
        cout << "Nhap phan tu thu " << i << ": ";
        cin >> a[i];
    }
}

// Function to print array elements
void xuat(int a[], int n) {
    cout << "\nCac phan tu trong mang la: ";
    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }
    cout << endl;
}

// Function to merge two subarrays of arr[]
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temp arrays
    int* L = new int[n1];
    int* R = new int[n2];

    // Copy data to temp arrays L[] and R[]
    for (int i = 0; i < n1; ++i)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; ++j)
        R[j] = arr[mid + 1 + j];

    // Merge the temp arrays back into arr[left..right]
    int i = 0; // Initial index of first subarray
    int j = 0; // Initial index of second subarray
    int k = left; // Initial index of merged subarray

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

    // Free the allocated memory
    delete[] L;
    delete[] R;
}

// Function to implement merge sort
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        // Sort first and second halves
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        // Merge the sorted halves
        merge(arr, left, mid, right);
    }
}

int main() {
    int a[10001], n;
    cout << "Nhap so luong phan tu trong mang: ";
    cin >> n;

    nhap(a, n);

    cout << "Mang truoc khi sap xep: ";
    xuat(a, n);

    mergeSort(a, 0, n - 1);

    cout << "Mang sau khi sap xep: ";
    xuat(a, n);

    return 0;
}

