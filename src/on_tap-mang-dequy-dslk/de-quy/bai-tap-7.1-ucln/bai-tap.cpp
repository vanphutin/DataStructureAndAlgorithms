#include <iostream>
using namespace std;

int ucln(int a,int b){
	if(a == b){
		return a;
	}
	else if (a > b){
		return ucln(a-b,b);
	}
	return ucln(a,b-a);
}

int bcnn(int a, int b){
	return a * b / ucln(a,b);
}
int main() {
    int a, b;
    cin >> a >> b;
    cout << "UCLN: " << ucln(a, b);
    cout << "\nBCNN: " << bcnn(a, b);
    return 0;
}
