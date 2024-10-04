#include <iostream>

using namespace std;

struct person {
    int pData;
    person* Next, *Prev;
};

typedef person* List;

void insertFirst(List& F, List& L, int data) {
    List q = new person;
    q->pData = data;
    q->Next = F;
    q->Prev = NULL;
    if (F == NULL) {
        F = L = q;
    } else {
        F->Prev = q;
        F = q;
    }
}

void insertLast(List& F, List& L, int data) {
    List q = new person;
    q->pData = data;
    q->Next = NULL;
    q->Prev = L;
    if (F == NULL) {
        F = L = q;
    } else {
        L->Next = q;
        L = q;
    }
}

void delFirst(List& F, List& L) {
    List p = F;
    if (F == L) {
        delete L;
        F = L = NULL;
    } else {
        F = F->Next;
        F->Prev = NULL;
        delete p;
    }
}

void delLast(List& F, List& L) {
    List p = L;
    if (F == L) {
        delete L;
        F = L = NULL;
    } else {
        L = L->Prev;
        L->Next = NULL;
        delete p;
    }
}

void delValue(List& F, List& L, int K) {
    List p = F;
    while (p != NULL) {
        if (p->pData == K) {
            if (p == F) {
                delFirst(F, L);
            } else if (p == L) {
                delLast(F, L);
            } else {
                p->Prev->Next = p->Next;
                p->Next->Prev = p->Prev;
                delete p;
            }
        }
        p = p->Next;
    }
}

void sortList(List& F, List& L) {
    bool swapped = true;
    while (swapped) {
        swapped = false;
        List p = F;
        while (p->Next != NULL) {
            if (p->pData > p->Next->pData) {
                int temp = p->pData;
                p->pData = p->Next->pData;
                p->Next->pData = temp;
                swapped = true;
            }
            p = p->Next;
        }
    }
}

int countElements(List F) {
    int count = 0;
    List p = F;
    while (p != NULL) {
        count++;
        p = p->Next;
    }
    return count;
}

int countValue(List F, int K) {
    int count = 0;
    List p = F;
    while (p != NULL) {
        if (p->pData == K) {
            count++;
        }
        p = p->Next;
    }
    return count;
}

void findMinMax(List F, int& min, int& max) {
    if (F == NULL) {
        return;
    }
    min = max = F->pData;
    List p = F->Next;
    while (p != NULL) {
        if (p->pData < min) {
            min = p->pData;
        }
        if (p->pData > max) {
            max = p->pData;
        }
        p = p->Next;
    }
}

bool isSortedAscending(List F) {
    if (F == NULL) {
        return true;
    }
    List p = F;
    while (p->Next != NULL) {
        if (p->pData > p->Next->pData) {
            return false;
        }
        p = p->Next;
    }
    return true;
}

void printList(List F) {
    List p = F;
    while (p != NULL) {
        cout << p->pData << " ";
        p = p->Next;
    }
    cout << endl;
}

int main() {
    List F = NULL, L = NULL;
    int choice, data, K;

    while (true) {
        cout << "Menu:\n";
        cout << "1. Them mot phan tu vao dau danh sach\n";
        cout << "2. Them mot phan tu vao cuoi danh sach\n";
        cout << "3. Xoa mot phan tu o dau\n";
        cout << "4. Xoa mot phan tu o cuoi\n";
        cout << "5. Xoa mot phan tu co gia tri bang K\n";
        cout << "6. Sap xep\n";
        cout << "7. Tim kiem trong danh sach co bao nhieu ptu co gia tri bang K\n";
        cout << "8. Dem trong danh sach co bao nhieu phan tu\n";
        cout << "9. Tim kiem gia tri min, max\n";
        cout << "10. Kiem tra xem co sap xep tang dan khong\n";
        cout << "11. In ra danh sachs\n";
        cout << "0. Exit\n";
        cout << "Chon: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Them dau: ";
                cin >> data;
                insertFirst(F, L, data);
                break;
            case 2:
                cout << "Them cuoi: ";
                cin >> data;
                insertLast(F, L, data);
                break;
            case 3:
                delFirst(F, L);
                break;
            case 4:
                delLast(F, L);
                break;
            case 5:
                cout << "Nhap K: ";
                cin >> K;
                delValue(F, L, K);
                break;
            case 6:
                sortList(F, L);
                break;
            case 7:
            	cout << "Nhap K: ";
                cin >> K;
                cout << "Cac phan tu co gi tri = K: " << countValue(F, K) << endl;
                break;
            case 8:
                cout << "So luong phan tu: " << countElements(F) << endl;
                break;
            case 9:
            	int min;
				int max;
                findMinMax(F, min, max);
                cout << "Gia tri nho nhat: " << min << endl;
                cout << "Gia tri lon nhat: " << max << endl;
                break;
            case 10:
                if (isSortedAscending(F)) {
                    cout << "Danh sach da duoc sap xep\n";
                } else {
                    cout << "Danh sach chau duoc sap xep\n";
                }
                break;
            case 11:
                printList(F);
                break;
            case 0:
                exit(0);
            default:
                cout << "Lua chon khong dung\n";
        }
    }

    return 0;
}
