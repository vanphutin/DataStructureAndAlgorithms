#include <iostream>
using namespace std;

int nhiPhan(int n){
    if(n == 0) return 0;
    else return nhiPhan(n / 2) * 10 + (n % 2);
}

int main(){
    int n; 
    cin >> n;
    cout << nhiPhan(n);
    return 0;
}

//nhiPhan(0) = 0
//nhiPhan(1) = 0 * 10 + 1 = 1
//nhiPhan(2) = 1 * 10 + 0 = 10
//nhiPhan(4) = 10 * 10 + 0 = 100
//nhiPhan(9) = 100 * 10 + 1 = 1001
