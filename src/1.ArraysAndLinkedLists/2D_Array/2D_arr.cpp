#include <bits/stdc++.h>
#include <math.h>
using namespace std;
int main(){
	int n, m; cin>>n >> m;
	int a[n][m];
	int max_val = INT_MIN, min_val = INT_MAX;
	
	//nhap
	for(int i = 0 ; i < n ; i++){
		for(int j = 0 ; j < m ; j++){
			cin>>a[i][j];
		}
	}
	
	//xuat
    cout << "Ma tran vua nhap:" << endl;
	for(int i = 0 ; i < n ; i++){
		for(int j = 0 ; j < m ; j++){
			cout<<a[i][j]<<" ";
		}
		cout<<endl;
	}
	
	// tim min-max
	for(int i = 0 ; i < n ; i++){
		for(int j = 0 ; j < m ; j++){
		
			max_val = max(max_val, a[i][j]);
			min_val = min(min_val, a[i][j]);
		}
	}
	cout << "Gia tri lon nhat: " << max_val << endl;
    cout << "Gia tri nho nhat: " << min_val << endl;
    
   // Tính tong tung hang
    cout << "Tong tung hang:" << endl;
    for (int i = 0; i < n; i++) {
        int sum = 0;
        for (int j = 0; j < m; j++) {
            sum += a[i][j];
        }
        cout << "Hang " << i + 1 << ": " << sum << endl;
    }

    // Tính tong tung cot
    cout << "Tong tung cot:" << endl;
    for (int j = 0; j < m; j++) {
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += a[i][j];
        }
        cout << "Cot " << j + 1 << ": " << sum << endl;
    }
	return 0;
}
