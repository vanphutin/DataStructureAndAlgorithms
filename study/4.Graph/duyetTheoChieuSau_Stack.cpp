#include <iostream>
#include <cstdio>
#include <stack>
#include <queue>

int G[100][100], n;
int dd[100];
char dinh[] = {' ','1','2','3','4','5','6','7','8'};

void docMaTran(const char* tenDT) {
    FILE* fptr;
    fptr = fopen(tenDT, "r");
    if (fptr != NULL) {
        printf("da mo duoc file\n");
        fscanf(fptr, "%d", &n);
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                int x;
                fscanf(fptr, "%d", &x);
                G[i][j] = x;
            }
        }
        fclose(fptr);
    }
    else {
        printf("khong mo duoc file\n");
        return;
    }
}

void xuatMaTran() {
    printf("\n");
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= n; j++) {
            printf("%4d", G[i][j]);
        }
        printf("\n");
    }
}

void khoiTao() {
    for(int i = 0 ; i <= n ; i++) 
        dd[i] = 1;
}
void F(int A){
	dd[A]=0;
	printf("%c ",dinh[A]);
	for(int U = 1 ; U<=n ; U++){
		if(G[A][U] != 0){
			if(dd[U] == 1){
				F(U);
			}
		}
	}
}
void duyetTheoChieuSau_Stack(int A) {
    std::stack<int> stk;
    stk.push(A);
    dd[A] = 0;

    while (!stk.empty()) {
        int u = stk.top();
        stk.pop();

        printf("%c ", dinh[u]);

        for (int v = 1; v <= n; v++) {
            if (G[u][v] != 0 && dd[v]) {
                stk.push(v);
                dd[v] = 0;
            }
        }
    }
}
int main(int argc, char** argv) {
    docMaTran("D:\\DataStructureAndAlgorithms\\study\\4.Graph\\Graph.txt"); // "D:\DataStructureAndAlgorithms\study\4.Graph\Graph.txt"
    xuatMaTran();
    int s;
    std::cout<<"\nnhap dinh bat dau duyet: "; std::cin>>s;
    khoiTao();
    duyetTheoChieuSau_Stack(s);
    return 0;
}

