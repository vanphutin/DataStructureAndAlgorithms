#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

class Solution
{
public:
    vector<int> findKDistantIndices(vector<int> &nums, int key, int k)
    {
        vector<int> res;
        int n = nums.size();

        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (nums[j] == key && abs(i - j) <= k)
                {
                    res.push_back(i);
                    break;
                }
            }
        }

        return res;
    }
};

int main()
{
    Solution sol;
    vector<int> nums = {3, 4, 9, 1, 3, 9, 5};
    int key = 9, k = 2;

    vector<int> result = sol.findKDistantIndices(nums, key, k);

    for (int i : result)
    {
        cout << i << " ";
    }

    return 0;
}
