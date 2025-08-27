// Cho mảng A[] gồm N số nguyên không âm và số K. Nhiệm vụ của bạn là hãy chia
// mảng A[] thành hai mảng con có kích cỡ K và N-K sao cho hiệu giữa tổng hai
// mảng con là lớn nhất. Ví dụ với mảng A[] = {8, 4, 5, 2, 10}, K=2 ta có kết quả là
// 17 vì mảng A[] được chia thành hai mảng {4, 2} và { 8, 5,10} có hiệu của hai
// mảng con là 23-6=17 là lớn nhất.

#include <iostream>
#include <algorithm>
using namespace std;
typedef long long ll;
int main()
{
    int n, k;
    cin >> n >> k;
    int a[n];
    for (int &x : a)
    {
        cin >> x;
    }
    sort(a, a + n);
    k = min(k, n - k);
    ll s1 = 0, s2 = 0;
    for (int i = 0; i < n; i++)
    {
        if (i < k)
            s1 += a[i];
        else
            s2 += a[i];
    }
    cout << s2 - s1;

    return 0;
}