//BAI 6
#include <bits/stdc++.h>
using namespace std;

string xuLy(string s, int k) {
    stack<pair<char, int>> st;
    for (int i = 0; i < s.length(); i++) {
        if (!st.empty() && st.top().second == k - 1 && st.top().first == s[i]) {
            st.pop();
        } else {
            if (st.empty() || s[i] != st.top().first) {
                st.push({s[i], 1});
            } else {
                st.top().second++;
            }
        }
    }
    string res = "";
    while (!st.empty()) {
        auto it = st.top(); st.pop();
        for (int i = 0; i < it.second; i++) {
            res += it.first;
        }
    }
    reverse(res.begin(), res.end());
    return res;
}

int main() {
    string s;
    int k;
    cout << "Nhap vao 1 xau "; 
    cout << "\nvi du: dddbbabcb |";
    cin >> s;
    cout << "\nNhap so luong can xoa trung: ";
    cin >> k;
    string res = xuLy(s, k);
    if (res == "") {
        cout << "EMPTY";
    } else {
        cout << res;
    }
    return 0;
}

