const maxSlidingWindow = function (nums, k) {
  if (nums.length == 1) {
    return nums;
  }

  let queue = [];
  let res = [];
  let left = 0;
  let right = 0;

  /*
   * The goal is to maintain a decreasing monotonic queue and register
   * max value as the window shifts.
   *
   * nums = [1,3,-1,-3,5,3,6,7], k = 3
   *
   * i        queue           output
   * 0        [1]             []
   * 1        [3]             []
   * 2        [3, -1]         [3]
   * 3        [3, -1, -3]     [3, 3]
   * 4        [5]             [3, 3, 5]
   * 5        [5, 3]          [3, 3, 5, 5]
   * 6        [6]             [3, 3, 5, 5, 6]
   * 7        [7]             [3, 3, 5, 5, 6, 7]
   */

  while (right < nums.length) {
    //  Checking if there exists a item in queue that is less than nums[right], If there is than we remove that element from queue.
    while (nums[right] > queue[queue.length - 1] && queue.length > 0) {
      queue.pop();
    }
    queue.push(nums[right]);

    if (right - left + 1 < k) {
      right++;
    } else if (right - left + 1 === k) {
      //   Adding first element of the queue to result array
      res.push(queue[0]);
      if (queue[0] === nums[left]) {
        queue.shift();
      }
      left++;
      right++;
    }
  }
  return res;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

console.log(maxSlidingWindow(nums, k));

//  [5, 4, 4, 2, 1] -- non-increasing order

// if (queue[0] === nums[l]) {
//   queue.shift();
// }

// this line ensures that if the maximum element in the current window (queue[0]) is the same as the element about to leave the window (nums[l]), it is removed from the queue because it won't be part of the next window. This keeps the queue updated with only relevant elements for the current window.

// queue maintain kora hocche karon jokhon res.push(queue[0]) kora hobe tokhon jeno boro number ta push kora jai.

//window size queue maintain korena, left pointer ebong right pointer diye maintain kora hoy.
