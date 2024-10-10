#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

struct Sponsor {
    vector<pair<int, int>> value_function;
    double total_value = 0;
};

double compute_area(const Sponsor& sponsor, int l) {
    double area = 0;
    for (int i = 1; i < sponsor.value_function.size(); ++i) {
        int x1 = sponsor.value_function[i - 1].first;
        int y1 = sponsor.value_function[i - 1].second;
        int x2 = sponsor.value_function[i].first;
        int y2 = sponsor.value_function[i].second;
        area += (y1 + y2) * (x2 - x1) / 2.0;
    }
    return area;
}

int main() {
    int n, l;
    cin >> n >> l;
    
    vector<Sponsor> sponsors(n);
    for (int i = 0; i < n; ++i) {
        int m;
        cin >> m;
        sponsors[i].value_function.resize(m);
        for (int j = 0; j < m; ++j) {
            cin >> sponsors[i].value_function[j].first >> sponsors[i].value_function[j].second;
        }
        sponsors[i].total_value = compute_area(sponsors[i], l);
    }
    
    // Phân chia bi?n qu?ng cáo (Ch? dua ra 1 cách phân chia h?p l?)
    double previous_cut = 0;
    for (int i = 1; i <= n; ++i) {
        double new_cut = previous_cut + l / double(n);
        cout << new_cut << " " << i << endl;
        previous_cut = new_cut;
    }
    return 0;
}

