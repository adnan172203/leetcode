const minEatingSpeed = (piles, h) => {
  let l = 1;
  let r = Math.max(...piles);
  let res = r;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let hours = 0;
    for (const p of piles) {
      hours += Math.ceil(p / mid);
    }
    if (hours <= h) {
      res = Math.min(res, mid);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

let piles = [3, 6, 7, 11];
let h = 8;

minEatingSpeed(piles, h);

//video - https://www.youtube.com/watch?v=QQcEIxK-snE

// Why Math.max(...piles)?

// Maximum Speed: If Koko eats at the maximum rate equal to the largest pile size (i.e., Math.max(...piles)), she can finish that pile in exactly one hour. This is the fastest possible eating speed that makes sense because any speed higher than the largest pile is redundant; Koko would still only finish one pile per hour if her speed exceeds the size of the largest pile.

// Upper Bound Validity: By setting r to Math.max(...piles), you ensure that the binary search starts with a valid upper bound. Any speed above this value is unnecessary for consideration because it wouldn't change the fact that each pile is consumed in one hour at most.

// ==================== //

// Calculate Total Hours:
// Compute the total hours needed to eat all bananas at this eating speed (mid):

// let hours = 0;
// for (const p of piles) {
//   hours += Math.ceil(p / mid);
// }

// For example, if mid is 6:

// 3 / 6 = 0.5 hours (rounded up to 1 hour)
// 6 / 6 = 1 hour
// 7 / 6 ≈ 1.17 hours (rounded up to 2 hours)
// 11 / 6 ≈ 1.83 hours (rounded up to 2 hours)
// Total hours = 1 + 1 + 2 + 2 = 6 hours
