#include <bits/stdc++.h>
typedef struct node node; // cho phep su dung node thay vi struct node
using namespace std;

node* taoNode(int x);
void duyet(node *head);
int dem(node *head);
void themNode_front(node **head, int x);
void soChan(node *head);
int timGiaTriLonNhat(node *head);
void nhap_front(node **head);
void themNode_back(node **head, int x);
void nhap_back(node **head);
void chinhPhuong(node *head);

int main(int argc, char** argv){
	node *head = NULL;
	  nhap_front(&head);
	  nhap_back(&head);
	duyet(head);
	  cout<<"\nsize: "<<dem(head);
	soChan(head);
	  cout<<"\nGia tri lon nhat trong danh sach la: "<<timGiaTriLonNhat(head);
	  chinhPhuong(head);
	return 0;
}

//ham nhap
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

//ham duyet node 
void duyet(node *head){
	cout<<"Cac phan tu trong DSLK: ";
	while(head != NULL){
		cout<<head->data<<' ';
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

//ham them node vao dau danh sach
void themNode_front(node **head, int x){
	node *nodeMoi = taoNode(x); //xin cap phat them 
	// buoc 1 : cho phan next cua newNode -> *head 
	nodeMoi->next = *head; //*head => dia chi cua node trong dslk
	// buoc 2 : cap nhat node *head->newNode
	*head = nodeMoi;
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

//========================================
// them node vao cuoi danh sach
void nhap_back(node **head){
	int n;
	cout<<"\nNhap sao luong node can them vao cuoi DSLK: "; cin>>n;
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



