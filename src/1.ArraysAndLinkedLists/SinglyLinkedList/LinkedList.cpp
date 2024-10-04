#include <iostream>
using namespace std;

struct Node {
    int data;
    Node *Next;
};

typedef Node *List;

// them dau
void insertFirst(int x, List &F) {
    List p = new Node;
    p->data = x;
    p->Next = NULL;
    if (F == NULL) {
        F = p;
    } else {
        p->Next = F;
        F = p;
    }
}

// them cuoi
void insertLast(int x, List &F) {
    List p = new Node;
    p->data = x;
    p->Next = NULL;
    if (F == NULL) {
        F = p;
    } else {
        List q = F;
        while (q->Next) {
            q = q->Next;
        }
        q->Next = p;
    }
}

// xoa dau
void defFirst(List &F) {
    if (F == NULL) {
        cout << "Danh sach rong. Khong the xoa." << endl;
        return;
    }
    List p = F;
    F = F->Next;
    delete p;
}

// xoa cuoi
void delLast(List &F) {
    if (F == NULL) return;
    if (F->Next == NULL) {
        delete F;
        F = NULL;
    } else {
        List p = F;
        while (p->Next->Next != NULL) {
            p = p->Next;
        }
        delete p->Next;
        p->Next = NULL;
    }
}

// tim gia tri bang K trong danh sach
void searchEqualK(int k, List F) {
    List p = F;
    int count = 0;
    while (p != NULL) {
        if (p->data == k) {
            count++;
        }
        p = p->Next;
    }
    cout << "So luong cac phan tu bang " << k << ": " << count << endl;
}

// dem so luong phan tu trong danh sach
int demPhanTu(List F) {
    int count = 0;
    List p = F;
    while (p != NULL) {
        count++;
        p = p->Next;
    }
    return count;
}

// tim gia tri lon nhat va nho nhat trong danh sach
void findMinMax(List F) {
    if (F == NULL) {
        cout << "Danh sach rong." << endl;
        return;
    }
    int minVal = F->data;
    int maxVal = F->data;
    List p = F;
    while (p != NULL) {
        if (p->data < minVal) {
            minVal = p->data;
        }
        if (p->data > maxVal) {
            maxVal = p->data;
        }
        p = p->Next;
    }
    cout << "Gia tri nho nhat: " << minVal << endl;
    cout << "Gia tri lon nhat: " << maxVal << endl;
}

// kiem tra danh sach co sap xep tang dan hay khong
bool sapXepTangDan(List F) {
    if (F == NULL || F->Next == NULL) {
        return true;
    }
    List p = F;
    while (p->Next != NULL) {
        if (p->data > p->Next->data) {
            return false;
        }
        p = p->Next;
    }
    return true;
}

// in danh sach
void printF(List F) {
    if (F == NULL) {
        cout << "Danh sach rong." << endl;
        return;
    }
    List p = F;
    while (p) {
        cout << "Data: " << p->data << endl;
        p = p->Next;
    }
}

// chuong trinh chinh
int main() {
    List F = NULL;
    int choice, value, k;

    do {
        cout << "\n===== Menu =====" << endl;
        cout << "1. Them vao dau danh sach" << endl;
        cout << "2. Them vao cuoi danh sach" << endl;
        cout << "3. Xoa phan tu dau tien" << endl;
        cout << "4. Xoa phan tu cuoi cung" << endl;
        cout << "5. Tim kiem phan tu bang K" << endl;
        cout << "6. Dem so luong phan tu" << endl;
        cout << "7. Tim gia tri lon nhat va nho nhat" << endl;
        cout << "8. Kiem tra danh sach co tang dan hay khong" << endl;
        cout << "9. In danh sach" << endl;
        cout << "0. Thoat" << endl;
        cout << "Nhap lua chon cua ban: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Nhap gia tri can them vao dau: ";
                cin >> value;
                insertFirst(value, F);
                break;
            case 2:
                cout << "Nhap gia tri can them vao cuoi: ";
                cin >> value;
                insertLast(value, F);
                break;
            case 3:
                defFirst(F);
                break;
            case 4:
                delLast(F);
                break;
            case 5:
                cout << "Nhap gia tri K can tim: ";
                cin >> k;
                searchEqualK(k, F);
                break;
            case 6:
                cout << "So luong phan tu: " << demPhanTu(F) << endl;
                break;
            case 7:
                findMinMax(F);
                break;
            case 8:
                if (sapXepTangDan(F)) {
                    cout << "Danh sach duoc sap xep tang dan." << endl;
                } else {
                    cout << "Danh sach khong duoc sap xep tang dan." << endl;
                }
                break;
            case 9:
                printF(F);
                break;
            case 0:
                cout << "Thoat chuong trinh." << endl;
                break;
            default:
                cout << "Lua chon khong hop le. Vui long thu lai." << endl;
        }
    } while (choice != 0);

    return 0;
}

