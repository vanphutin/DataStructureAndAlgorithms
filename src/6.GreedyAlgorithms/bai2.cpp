#include <iostream>
using namespace std;

long long handle(long long n, char a, char b){
	string s = to_string(n);
	for(int i = 0 ; i < s.length(); i++){
		if(s[i] == a) s[i] = b;
	}
	return stoll(s);
}

int main(){
	int a,b;
	cin>>a>>b;
	cout<<handle(a, '5','6')+ handle(b, '5','6')<<"\n";
	cout<<handle(a, '6','5')+handle(b, '6','5');
	return 0;
}
