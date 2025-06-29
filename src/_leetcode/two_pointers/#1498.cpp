#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
typedef long long ll;

class Solution
{
public:
    int numSubseq(vector<int> &nums, int target)
    {

        const int MOD = 1e9 + 7;
        int count = 0;
        int i = 0, j = nums.size() - 1;
        sort(nums.begin(), nums.end());

        vector<int> power(nums.size(), 1);
        for (int k = 1; k < nums.size(); k++)
        {
            power[k] = (power[k - 1] * 2) % MOD;
        }

        while (i <= j)
        {

            if (nums[i] + nums[j] <= target)
            {
                count = (count + power[j - i]) % MOD;
                i++;
            }
            else
            {
                j--;
            }
        }

        return count;
    }
};

int main()
{
    Solution sol;
    vector<int> nums = {3, 5, 6, 7};
    int target = 9;

    int result = sol.numSubseq(nums, target);

    cout << "Number of subsequences: " << result << endl;
    return 0;
}
