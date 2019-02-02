var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6, 701, -23, 76, 10000, -34];

var findMax = 0;

for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
    if (testArray[arrayPosition] > findMax){
        findMax = testArray[arrayPosition];
    }
}

console.log("The highest number in the array is " + findMax);
