//BAI 4

#include <bits/stdc++.h>

using namespace std;

int main(){
	int n ; cin>>n;
	queue<string> q;
	q.push("1");
	vector<string> v;
	v.push_back("1");
	while(v.size() < n){
		string u = q.front(); q.pop();
		q.push(u + "0");
		q.push(u + "1");
		v.push_back(u + "0");
		v.push_back(u + "1");
	}
	for(int i = 0 ; i < n ; i++){
		cout<< v[i]<<' ';
	}
}
