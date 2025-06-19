#include <iostream>
#include <vector>
#include <algorithm>
#include <ranges>

using namespace std;

class Solution
{
public:
    int partitionArray(vector<int> &nums, int k)
    {
        sort(nums.begin(), nums.end());
        int res = nums[0];
        int ans = 1;

        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] - res > k)
            {
                ans++;
                res = nums[i];
            }
        }

        return ans;
    }
};

int main()
{
    vector<int> nums = {1, 3, 2, 6, 5};
    Solution sol;
    sol.partitionArray(nums, 2);

    int result = sol.partitionArray(nums, 2);
    cout << result << endl;
    return 0;
}
