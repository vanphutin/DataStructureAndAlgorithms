#include <iostream>

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// Hàm phân ho?ch m?ng
int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // Ch?n ph?n t? cu?i cùng làm pivot
    int i = low - 1; // V? trí c?a ph?n t? nh? hon pivot

    for (int j = low; j < high; j++) {
        // N?u ph?n t? hi?n t?i nh? hon ho?c b?ng pivot
        if (arr[j] <= pivot) {
            i++; // Tang ch? s? c?a ph?n t? nh? hon
            swap(arr[i], arr[j]); // Hoán d?i
        }
    }
    swap(arr[i + 1], arr[high]); // Ðua pivot v? dúng v? trí
    return i + 1;
}

// Hàm QuickSort
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high); // Ch? s? c?a pivot sau khi phân ho?ch

        // G?i d? quy s?p x?p các ph?n t? tru?c và sau phân ho?ch
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Hàm hi?n th? m?ng
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

// Hàm main
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

