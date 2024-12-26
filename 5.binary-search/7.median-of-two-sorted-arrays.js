const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const x = nums1.length;
  const y = nums2.length;

  let left = 0;
  let right = x;

  while (left <= right) {
    const partitionX = Math.floor((left + right) / 2);
    const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    const maxX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const minX =
      partitionX === x ? Number.POSITIVE_INFINITY : nums1[partitionX];

    const maxY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    const minY =
      partitionY === y ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      right = partitionX - 1;
    } else {
      left = partitionX + 1;
    }
  }
};

// Example usage:
// const nums1 = [1, 3];
// const nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.00000

const nums3 = [15, 17, 20];
const nums4 = [16, 18, 19];
console.log(findMedianSortedArrays(nums3, nums4));

// why do we need partionX and partionY? explain with example...............

// PartitionX and PartitionY are used to divide the two arrays (nums1 and nums2) into two parts, such that the elements on the left side of PartitionX and PartitionY are smaller or equal to the elements on the right side.

// Let's consider an example:

// nums1 = [1, 3, 8, 9]
// nums2 = [2, 4, 7, 10]
// To find the median of the combined sorted arrays, we need to find the correct partition points. These partition points effectively divide the arrays into two parts such that:

// All elements on the left side of PartitionX are smaller or equal to the elements on the right side.
// All elements on the left side of PartitionY are smaller or equal to the elements on the right side.
// For instance, consider PartitionX dividing nums1 like this:

// [1, 3 | 8, 9]
// And PartitionY dividing nums2 like this:

// [2, 4, | 7, 10]
// Now, if we merge these two parts, we'll have:

// [1, 2, 3, 4 | 7, 8, 9, 10]
// You can see that all elements on the left side of the partitions are smaller or equal to all elements on the right side.

// PartitionX and PartitionY help in dynamically adjusting and finding the correct positions for the partitions while ensuring that the combined arrays are sorted. This process is crucial for calculating the median efficiently.

//===================================

// why do we need maxX , maxY, and minX, minY? explain with example
//
// maxX, maxY, minX, and minY are used to determine the elements surrounding the partition points partitionX and partitionY. These elements are crucial for deciding whether the partitions are placed correctly to ensure that all elements on the left side are smaller or equal to all elements on the right side.

// Let's continue with the same example:

// nums1 = [1, 3, 8, 9]
// nums2 = [2, 4, 7, 10]
// Suppose PartitionX is at index 2 in nums1 and PartitionY is calculated accordingly to maintain balance between the two arrays. So, PartitionY would be at index 2 in nums2. This would give us:

// [1, 3 | 8, 9]
// [2, 4 | 7, 10]
// Now, we need to compare the elements surrounding these partitions to ensure that the partitions are placed correctly.

// maxX is the maximum element to the left of partitionX in nums1.
// minX is the minimum element to the right of partitionX in nums1.
// maxY is the maximum element to the left of partitionY in nums2.
// minY is the minimum element to the right of partitionY in nums2.
// So, in this example:

// maxX = 3, minX = 8
// maxY = 4, minY = 7
// We need to ensure that maxX is less than or equal to minY and maxY is less than or equal to minX to confirm that the partitions are placed correctly.

// This comparison ensures that when we merge the two partitions, all elements on the left side are smaller or equal to all elements on the right side, which is essential for finding the median of the combined sorted arrays.

// =======================BlackBox AI =======================

// 1. Why do we need partitionX and partitionY?
// Purpose of Partitions:

// The idea of partitionX and partitionY is to divide the two arrays into two halves: a left half and a right half. This helps us find the median by ensuring that all elements in the left half are less than or equal to all elements in the right half.
// Example: Let’s say we have two sorted arrays:

// nums1 = [1, 3]
// nums2 = [2]
// We want to find the median of the combined sorted array, which would be [1, 2, 3].

// Choosing Partitions:

// If we choose partitionX = 1, it means we are cutting nums1 after the first element:
// Left side of nums1: [1]
// Right side of nums1: [3]
// Now, we need to find partitionY such that the left and right halves of the combined arrays are balanced. Since nums1 has 1 element on the left, we need 1 element on the left from nums2. So, partitionY = 1:
// Left side of nums2: [2]
// Right side of nums2: []
// Checking the Condition:

// Now we check if the maximum of the left sides is less than or equal to the minimum of the right sides:
// maxX = 1 (from nums1)
// maxY = 2 (from nums2)
// minX = 3 (from nums1)
// minY = Infinity (since nums2 has no right side)
// We see that maxX (1) <= minY (Infinity) and maxY (2) <= minX (3), so we have a valid partition.
// This partitioning helps us isolate the left and right halves of the combined arrays, which is crucial for finding the median.

// 2. Why do we need maxX and maxY?
// Purpose of maxX and maxY:

// maxX and maxY are used to determine the largest elements in the left halves of the two partitions. This is important because the median is based on the largest values in the left halves when the partitions are correct.
// Example: Continuing with the previous example:

// We have:
// Left side of nums1: [1] → maxX = 1
// Left side of nums2: [2] → maxY = 2
// Finding the Median:

// Since we have a valid partition, we need to find the median:
// The total number of elements is 3 (odd), so the median is the maximum of the left sides:
// median = max(maxX, maxY) = max(1, 2) = 2
// Why It Matters:

// If we didn’t have maxX and maxY, we wouldn’t know the largest values in the left halves, which are essential for calculating the median correctly.

// https://www.youtube.com/watch?v=2BOgAlmyTkc
