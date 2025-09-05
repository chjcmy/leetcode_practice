/**
 * 18. 4Sum (Medium)
 *
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,0,-1,0,-2,2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 * Example 2:
 * Input: nums = [2,2,2,2,2], target = 8
 * Output: [[2,2,2,2]]
 */

/**
 * 18. 4Sum (Medium)
 *
 * n개의 정수 배열 nums가 주어졌을 때, 다음 조건을 만족하는 모든 고유한 사중주 [nums[a], nums[b], nums[c], nums[d]]의 배열을 반환합니다:
 * 0 <= a, b, c, d < n
 * a, b, c, d는 서로 다릅니다.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 * 답은 어떤 순서로든 반환할 수 있습니다.
 *
 * 예시 1:
 * 입력: nums = [1,0,-1,0,-2,2], target = 0
 * 출력: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 * 예시 2:
 * 입력: nums = [2,2,2,2,2], target = 8
 * 출력: [[2,2,2,2]]
 */
function fourSum(nums: number[], target: number): number[][] {

    const result: number[][] = [];

    const n: number = nums.length

    nums.sort((a, b) => a - b);
    
    if (n < 4) {
        return result;
    }

    // 여기에 구현하세요
    for(let i = 0; i < nums.length - 3; i++ ) {

        if (i >0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < n - 2; j++) {
            
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            
            let left = j + 1;
            let right = n - 1;

              // 투 포인터 루프
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                  if (sum === target) {
                      result.push([nums[i], nums[j], nums[left], nums[right]]);

                    while (left < right && nums[left]=== nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right]=== nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                  } else if (sum < target) {
                      left++;
                  } else {
                      right--;
                  }         
            }
        }
    }
    return result;
};

// Test cases
console.log(fourSum([1,0,-1,0,-2,2], 0)); // Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)); // Expected: [[2,2,2,2]]
