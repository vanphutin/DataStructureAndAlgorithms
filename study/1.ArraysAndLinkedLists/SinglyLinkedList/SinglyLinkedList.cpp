#include <bits/stdc++.h>
typedef struct node node; // cho phep su dung node thay vi struct node
using namespace std;

node* taoNode(int x);

void nhap_front(node **head);
void themNode_front(node **head, int x);
void nhap_middle(node **head);
void themNode_middle(node **head, int k, int x);
void nhap_back(node **head);
void themNode_back(node **head, int x);

void xoaNode_Dau(node **head);
void xoaNode_Cuoi(node **head);

void duyet(node *head);
int dem(node *head);
void soChan(node *head);
int timGiaTriLonNhat(node *head);
void chinhPhuong(node *head);
void tanSuat(node *head);
void xoaPT_Trung(node *head);

int main(int argc, char** argv){
	int lc ;
	node *head = NULL;
	int k,x;
	bool continueLoop = true;
	while(continueLoop){
		cout<<"=========================="<<endl;
		cout<<"1.Them node vao dau DSLK.\n";
		cout<<"2.Chen node vao giua DSLK.\n";
		cout<<"3.Them node vao cuoi DSLK.\n";
		cout<<"4.Xoa node dau DSLK.\n";
		cout<<"5.Xoa node cuoi DSLK.\n";
		cout<<"6.In ra so luong phan tu DSLK.\n";
		cout<<"7.In ra so chan trong DSLK.\n";
		cout<<"8.In ra so gia tri lon nhat trong DSLK.\n";
		cout<<"9.In ra so chinh phuong trong DSLK.\n";
		cout<<"10.In ra tan so suat hien DSLK.\n";
		cout<<"11.In ra danh sach cac phan tu (khong bi trung) trong DSLK.\n";
		cout<<"0.Thoat!";
		cout<<"\n==========================";
		cout<<"\nNhap lua chon: "; cin>>lc;
	
	switch(lc){
		case 1:{
			nhap_front(&head);
			duyet(head);
			break;
		}
		case 2:{
			nhap_middle(&head);
			duyet(head);
			break;
		}
		case 3:{
			nhap_back(&head);
			duyet(head);
			break;
		}
		case 4:{
			xoaNode_Dau(&head);
			duyet(head);
			break;
		}
		case 5:{
			xoaNode_Cuoi(&head);
			duyet(head);
			break;
		}
		case 6:{
			cout<<"\nsize: "<<dem(head);
			break;
		}
		case 7:{
			soChan(head);
			break;
	 	}
	 	case 8 :{
	 		cout<<"\nGia tri lon nhat trong danh sach la: "<<timGiaTriLonNhat(head);
			break;
		 }
		 case 9 :{
		 	chinhPhuong(head);
			break;
		 }
		 case 10:{
		 	tanSuat(head);
			break;
		 }
		 case 11 :{
		 	xoaPT_Trung(head);
			break;
		 }
		 default:
		 	cout<<"Thoat !(Enter)"<<endl;
			break;
		 
		}
			if (continueLoop) {
				char choice;
				cout << "\n\nBan muon tiep tuc? (Y/N): ";
				cin >> choice;
				if (choice != 'Y' && choice != 'y') {
					continueLoop = false;
				}
			}
	}
	return 0;
}



//ham tao node moi
struct node{
    int data; 
    struct node *next;
};

node* taoNode(int x){
	//Trong c : node *newNode = (node)malloc(sizeof(node)); 
	node *newNode = new node();
	newNode->data = x;
	newNode->next = NULL;
	return newNode;
}

//=================================================================================
//ham them node vao dau danh sach
void nhap_front(node **head){
    int n;
    cout << "Nhap so luong node can them vao dau DSLK: ";
    cin >> n;
    for(int i = 0; i < n; i++){
        int data;
        cout << "Nhap phan tu thu " << i + 1 << ": ";
        cin >> data;
        themNode_front(head, data);
    }
}
void themNode_front(node **head, int x){
	node *nodeMoi = taoNode(x);
	nodeMoi->next = *head;
	*head = nodeMoi;
}


//=================================================================================
// them node vao giua danh sach
void nhap_middle(node **head) {
    int x, k;
    cout<<"\nNhap node can chen vao giua DSLK: "; 
    cin>>x;
    cout<< "Nhap vi tri chen vao giua DSLK: "; 
    cin>> k;
    themNode_middle(head, k, x);
}

void themNode_middle(node **head, int k, int x) {
    int n = dem(*head);
    if (k < 1 || k > n + 1) {
        cout << "Vi tri khong hop le!\n";
        return;
    }
    if (k == 1) {
        themNode_front(head, x);
        return;
    }
    node *temp = *head;
    for (int i = 1; i < k - 2; i++) {
        temp = temp->next;
    }
    node *nodeMoi = taoNode(x);
    nodeMoi->next = temp->next;
    temp->next = nodeMoi;
}

//=================================================================================
// them node vao cuoi danh sach
void nhap_back(node **head){
	int n;
	cout<<"\nNhap so luong node can them vao cuoi DSLK: "; cin>>n;
	for(int i = 0 ; i<n ; i++){
		int data;
		cout<<"Nhap phan tu thu "<<i+1<<": "; cin>>data;
		themNode_back(head,data);
	}
}

void themNode_back(node **head, int x){
	node *temp = *head;
	node *nodeMoi = taoNode(x);
	if(*head == NULL){
		*head = nodeMoi;
		return;
	}
	while(temp->next != NULL){
		temp = temp->next;
	}
	temp->next = nodeMoi;
}

//=================================================================================
// XOA node dau va cuoi danh sach
void xoaNode_Dau(node **head){
	//kiem tra isNull
	if(*head == NULL){
		cout<<"\nDanh sach lien ket rong !."<<endl;
		return;
	}
	node *temp = *head;
	*head = temp->next;
	delete temp;
}
void xoaNode_Cuoi(node **head){
	if(*head == NULL){
		cout<<"\nDanh sach lien ket rong !."<<endl;
		return;
	}
	node *temp = *head;
	if(temp->next == NULL){
		*head = NULL;
		delete temp;
		return;
	}
	while(temp->next->next != NULL){
		temp = temp->next;
	}
	node *cuoi = temp->next;
	temp->next = NULL;
	delete cuoi;
}


//=============================== BAI TAP ============================================
//ham duyet node 
void duyet(node *head){
	if(head == NULL){
		return;
	}
	cout<<"Cac phan tu trong DSLK: ";
	while(head != NULL){
		cout<<" | "<<head->data<<" | ";
		head = head->next; // dia chi cua node tiep theo 
	}
}

//ham dem so node 
int dem(node *head){
	int count = 0;
	while(head != NULL){
		++count;
		head = head->next;
	}
	return count;
}


//in so chan khong bi trung gia tri
void soChan(node *head){
	if(head == NULL){
		cout<<"\nDanh sach lien ket rong !."<<endl;
		return;
	}
	bool danhDau[1001] = {false};
	cout << "\nCac so chan la: ";
	while(head != NULL){
		if(head->data % 2 == 0  && !danhDau[head->data]){
			cout<<head->data<<' ';
			danhDau[head->data] = true;	
		}
		head = head->next;
	}
}

//tim gia tri lon nhat
int timGiaTriLonNhat(node *head){
	int flag = 0;
	while(head != NULL){
		if(head->data > flag){
			flag = head->data ;
		}
		head = head->next;
	}
	return flag;
}

//tim so chinh phuong 
void chinhPhuong(node *head){
	if(head == NULL){
		cout<<"\nDanh sach lien ket rong !."<<endl;
		return;
	}
	bool danhDau[1001] = {false};
	cout << "\nCac so chinh phuong la: ";
	while(head != NULL){
		if(sqrt(head->data)*sqrt(head->data) == head->data && !danhDau[head->data]){
			cout<<head->data<<' ';
			danhDau[head->data] = true;
		}
		head = head->next;
	}
}

// tan suat xuat hien
void tanSuat(node *head){
	cout<<"\nTAN SUAT XUAT HIEN\n";
	//dem tan suat
	int max_val = timGiaTriLonNhat(head);
	 int *danhDau = new int[max_val + 1]();
	node *current = head;
    while (current != NULL) {
        danhDau[current->data]++;
        current = current->next;
    }
    for (int i = 0; i <= max_val; i++) {
        if (danhDau[i] > 0) {
            cout<<"\t"<<i<<" xuat hien " << danhDau[i] << " lan\n";
        }
    }

    delete[] danhDau;
}

// xoa cac phan tu trung
void xoaPT_Trung(node *head){
	cout<<"Xoa cac phan tu trung trong DSLK : ";
	int danhDau[1001] = {false};
	if(head == NULL){
		cout<<"\nDanh sach lien ket rong !."<<endl;
		return;
	}
	while(head != NULL){
		if(!danhDau[head->data]){
			cout<<head->data<<' ';
			danhDau[head->data] = true;
		}
		head = head->next;
	}
}
