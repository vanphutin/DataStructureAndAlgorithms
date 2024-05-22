// BAI 4

#include <bits/stdc++.h>
using namespace std;

int xuLy(string s){
	stack<int> st;
	int cnt = 0;
	for(int i = 0 ; i<s.length() ; i++){
		if(s[i] == ')'){
			if(!st.empty()){
				st.pop();
			}else{
				cnt++;
			}
		}else{
			st.push(i);
		}
	}
	cnt += st.size();
	return cnt;
}

int main(){
	string s; 
	cout<<"Nhap vao 1 sau ki tu"; cout<<"\nvd : ((()) | ";
	cin>>s;
	cout<<xuLy(s);
	return 0;
}
