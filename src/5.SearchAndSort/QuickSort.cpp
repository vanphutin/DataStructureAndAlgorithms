#include <iostream>

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// H�m ph�n ho?ch m?ng
int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // Ch?n ph?n t? cu?i c�ng l�m pivot
    int i = low - 1; // V? tr� c?a ph?n t? nh? hon pivot

    for (int j = low; j < high; j++) {
        // N?u ph?n t? hi?n t?i nh? hon ho?c b?ng pivot
        if (arr[j] <= pivot) {
            i++; // Tang ch? s? c?a ph?n t? nh? hon
            swap(arr[i], arr[j]); // Ho�n d?i
        }
    }
    swap(arr[i + 1], arr[high]); // �ua pivot v? d�ng v? tr�
    return i + 1;
}

// H�m QuickSort
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high); // Ch? s? c?a pivot sau khi ph�n ho?ch

        // G?i d? quy s?p x?p c�c ph?n t? tru?c v� sau ph�n ho?ch
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// H�m hi?n th? m?ng
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

// H�m main
int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    std::cout << "M?ng ban d?u: ";
    printArray(arr, n);

    quickSort(arr, 0, n - 1);

    std::cout << "M?ng sau khi s?p x?p: ";
    printArray(arr, n);
    return 0;
}

