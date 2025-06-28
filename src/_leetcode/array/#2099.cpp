#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution
{
public:
    vector<int> maxSubsequence(vector<int> &nums, int k)
    {
        // Tạo một vector lưu các cặp {giá trị, chỉ số ban đầu}
        vector<pair<int, int>> indexedNums;
        for (int i = 0; i < nums.size(); ++i)
        {
            indexedNums.push_back({nums[i], i});
        }

        // Sắp xếp các cặp theo giá trị giảm dần
        sort(indexedNums.begin(), indexedNums.end(), [](pair<int, int> &a, pair<int, int> &b)
             { return a.first > b.first; });

        // Lấy k phần tử lớn nhất (bao gồm cả chỉ số ban đầu)
        vector<pair<int, int>> topK(indexedNums.begin(), indexedNums.begin() + k);

        // Sắp xếp lại topK theo chỉ số ban đầu để duy trì thứ tự
        sort(topK.begin(), topK.end(), [](pair<int, int> &a, pair<int, int> &b)
             { return a.second < b.second; });

        // Trích xuất giá trị để trả về
        vector<int> result;
        for (auto &p : topK)
        {
            result.push_back(p.first);
        }

        return result;
    }
};

int main()
{
    Solution sol;
    vector<int> nums = {3, 5, 2, 6, -1, 4};
    int k = 3;
    vector<int> result = sol.maxSubsequence(nums, k);

    cout << "Dãy con có tổng lớn nhất: ";
    for (int num : result)
    {
        cout << num << " ";
    }
    return 0;
}
