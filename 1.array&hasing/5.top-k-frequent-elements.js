const topKFrequent = (nums, k) => {
  let map = {}; // Create an empty object to store the frequency of each element
  let bucket = []; // Create an empty array to use for bucket sort
  let result = []; // Create an empty array to store the final result

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      // If the element doesn't exist in the map, initialize its frequency to 1
      map[nums[i]] = 1;
    } else {
      // If the element already exists in the map, increment its frequency
      map[nums[i]]++;
    }
  }

  //{ 1: 3, 5:2, 7:3, 3:1 }
  //[  ]

  // Bucket sort
  for (let [num, freq] of Object.entries(map)) {
    if (!bucket[freq]) {
      // If the frequency bucket doesn't exist, create a new array with the element
      bucket[freq] = [num];
    } else {
      // If the frequency bucket exists, push the element into the existing array
      bucket[freq].push(num);
    }
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      // If the frequency bucket exists
      result.push(...bucket[i]); // Spread the elements from the bucket into the result array
    }
    if (result.length >= k) {
      // If the result array has already reached or exceeded k elements, exit the loop
      break;
    }
  }

  return result.slice(0, k); // Return only the first k elements from the result array
};

const nums = [1, 1, 1, 5, 5, 7, 7, 7, 3];
const k = 2;
console.log(topKFrequent(nums, k));

// bucket sort er moddhe frequency onujayi index value map hobe, { 1: 3, 5:2, 7:3, 3:1 } eta store hobe eivabe == [..,['3'],['5'],['1','7']]
// ['1','7'] save hobe 3 index e karon eder freq 3 ... ['5'] save hobe 2 index e karon etar frequency 2 .. same goes to 3

// bucket array er last theke traverse kora shuru hobe karon boro frequency last er dike thakbe

// use bucket sort because it's not possible get the max 2 number from the object directly. you have sort the object any how. that's why we sorted the object and make it array using bucket sort

//video : https://www.youtube.com/watch?v=87f9RVChpzY
