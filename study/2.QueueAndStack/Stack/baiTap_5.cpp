// BAI 5

#include <bits/stdc++.h>
using namespace std;

string	 xuLy(string s){
	stack<char> st;
	for(int i = 0 ; i< s.length() ; i++){
		if(!st.empty() && s[i] == st.top()){
			st.pop();
		}else{
			st.push(s[i]);
		}
	}
	string res = "";
	while(!st.empty()){
		res += st.top();
		st.pop();
	}
	reverse(res.begin(), res.end());
	return res;
}

int main(){
	string s;
	cout<<"Nhap vao 1 xau "; cout<<"\nvi du: dddbbabcb |";
	cin>>s;
	cout<<xuLy(s);
	return 0;
}
