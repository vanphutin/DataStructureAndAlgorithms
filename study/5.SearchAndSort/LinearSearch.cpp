#include <iostream>
#include <vector>

int linearSearch(const std::vector<int>& arr, int key) {
    for (int i = 0; i < arr.size(); ++i) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1; // N?u không tìm th?y
}

int main() {
    std::vector<int> arr = {4, 2, 7, 1, 9, 3};
    int key = 7;
    int index = linearSearch(arr, key);
    if (index != -1) {
        std::cout << "Element found at index " << index << std::endl;
    } else {
        std::cout << "Element not found" << std::endl;
    }
    return 0;
}

