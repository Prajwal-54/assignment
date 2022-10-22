
/*
solution link : https://github.com/Prajwal-54/assignment-intern/blob/main/question1.js

TIME COMPLEXITY : O(n)

SPACE COMPLEXITY : O(1)

POSSIBLE TEST CASES : []            -> []
                      [1]           ->  []
                      [1,3]         -> [3,1]
                      [1,3,4,5,6]   -> [6,1,5,3,4]
                      [1,2,4,5,6,7] -> [7,1,6,2,5,4]
*/

function solve(arr, n) {
  if (n === 0 || n == 1) return arr;
  let max = n - 1,
    min = 0;

  let key = arr[n - 1] + 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      arr[i] += (arr[max] % key) * key;
      max--;
    } else {
      arr[i] += (arr[min] % key) * key;
      min++;
    }
  }

  for (let i = 0; i < n; i++) arr[i] = Math.floor(arr[i] / key);
  return arr;
}

let arr = [];
try {
  let s = prompt(
    "enter sorted array elements : \ncomma(,) separted 1,2,3,4",
    "1,2,4,5"
  );
  if (s === null || s === undefined) throw "invalid input !\nempty array";

  //convert string to int
  arr = s.split(",");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }

  //checking whether array is sorted or not
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      throw "array should be sorted";
    }
  }

  arr = solve(arr, arr.length);

  alert("output : " + arr);
} catch (e) {
  alert(e);
}
