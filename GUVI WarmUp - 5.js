/* Create a function that takes an array and returns the first element. */

function getFirstElement(arr) {
	///Your code Starts here 
	
	if (Array.isArray(arr))
		return arr[0];
	
	///Your code Ends here
}

getFirstElement([1, 2, 3]);
/*
Lines For TestCase

getFirstElement([1, 2, 3]);
getFirstElement([80, 5, 100]);
getFirstElement([-500, 0, 50]);
*/