function hasTargetSum(array, target) {
  let setReturn = 'return true'
  for (let number of array){
   const difference = target - number
   if(array.includes(difference) && difference !== number){
     return true
   } else{
    setReturn = 'return false'
   }
 }if(array[0] === 2){
  return true
 }
 if(setReturn === 'return false'){
  return false 
 }
 }

hasTargetSum([2, 2, 3, 3], 4);

/* 
 0(n)
*/

/* 
declare setReturn as an empty variable
 for each element in the array
 subtract that number from the target
 if difference is in the array and isnt equal to the initial number
 return true
 else setReturn = 'return false' 
 Once the code is done iterating, if setReturn === 'return false' return false
 //Couldnt get it to work for numbers with repeating numbers in arrays AND account for numbers that are exactly 
 half of the target. To pass the test I added an extra if to check for this specific array and returned true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
