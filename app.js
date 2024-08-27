/*
Instructions:

    In Visual Studio Code, write the code that accomplishes the objectives listed below and ensures that the code compiles and runs as directed.
    Comment your code, to prove that you understand what you have written -- this is required!
    Create a new repository on GitHub for this week's assignments and push your code to the repository.
    Create a Video showcasing your assignment.
    Submit the two URL links for the GitHub repo and Video in the Text box.

Coding Steps:
All questions should be printed to your Browser's console using console.log()*/

console.log(`
Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`)
    ////ANSWER BELOW

 //create array called 'ages'   
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//display array 'ages'
console.log(ages);
    /// 

console.log(`
    1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
            Do not use numbers to reference the last element, find it programmatically.
            ages[7] - ages[0] is not allowed!`)
    ////ANSWER BELOW

///create function to subtract 1st value from last value in the array
let ageDiff = (array) => array[array.length-1] - array[0];
///display answer
console.log(ageDiff(ages));
///

console.log(`
    1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`)
    ////ANSWER BELOW
    
///add new age to array 'ages'
ages.push(12);
///check that function accounts for new age
console.log(ageDiff(ages));
    /// 

console.log(`
    1c. Use a loop to iterate through the array and calculate the average age.`)

    ////ANSWER BELOW
console.log(`
*** Googled for help @ https://www.explainthis.io/en/swe/find-average-in-an-array`)

////create function to get average age in array 'ages'
    function avgAge(array){
        let sum = 0;
        for(let i=0; i < array.length; i++){
            sum += array[i];
        } return sum/array.length;
   } console.log(avgAge(ages));

////alternate means of getting average age
   let averageAge = (array) => 
    array.reduce((sum, currentValue) => sum + currentValue,0)/ array.length;
    console.log(averageAge(ages));
    /// 

   console.log(`
Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`)
    
    ////ANSWER BELOW

///create new array 'names'
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

    /// 
console.log(`
    2a. Use a loop to iterate through the array and calculate the average number of letters per name`)
    ////ANSWER BELOW
    
///calculate avg # of letters per name
let avgNameLetters = (array) => 
        array.reduce((sum, element) => sum + element.length, 0) / array.length;
console.log(avgNameLetters(names));
    /// 

console.log(`
    2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`)
   
    ////ANSWER BELOW
///create arrow function 'nameString' to transform array into string with spaces
    let nameString = (array) => 
        array.reduce((element, currentValue) => (`${element} ${currentValue}`));
        console.log(`
        ${nameString(names)}`);
         /// 

    console.log(`
Question 3: How do you access the last element of any array?`)
    
    ////ANSWER BELOW
        console.log(`
        array[array.length - 1]`)
        /// 

    console.log(`
Question 4: How do you access the first element of any array?`)
   
////ANSWER BELOW
        console.log(`
        array[0]`)
        //// 

    console.log(`
Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

    For example:
    let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    let nameLengths = [5, 3, 4];             // create a new array`)
    ////ANSWER BELOW
    
///create new function 'nameLengthFinder'
function nameLengthFinder(array,newArray) {
    for(let i=0; i < array.length; i++){
        newArray.push(array[i].length);
    }}
///create newArray 'namesLength'
let namesLength = [];
///call function 'nameLengthFinder' with array 'namesLength' as array to push names lengths to
nameLengthFinder(names,namesLength);
///display array 'namesLength' with new values
console.log(namesLength);
console.log(`
    names = [${names}]`);
console.log(`
    namesLength = [${namesLength}]`);
/// 

    console.log(`
Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)
    
    ////ANSWER BELOW
///create arrow function 'sumNameLengths' that finds sum of all elements
    let sumNameLengths = (array) => array.reduce((sum,element) => sum + element,0);
///find sum of 'namesLength' array
    console.log(sumNameLengths(namesLength));
    ///

    console.log(`
Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`)
    ////ANSWER BELOW
    
////write new function with 2 pararemters, word and n
let concatWords = (word,n) => word.repeat(n);
///test function with 'Hello'
console.log(concatWords('Hello',5));
    /// 

    console.log(`
Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`)
    
////ANSWER BELOW    
let fullName = (firstName,lastName) => console.log(`${firstName} ${lastName}`);
fullName('Shay', 'Selden')
    /// 

    console.log(`
Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)
    ////ANSWER BELOW
///arrow function with output sum of array elements    
let sumArray = (array) => array.reduce((sum,currentValue) => sum + currentValue);
///function that nests sumArray function to get sum for the array, and then evaluates if it is >100, returning either true or false
function greaterThan100(array){
    let sum = sumArray(array);
    if(sum > 100){
        return true;
    } else return false;
}
////create 2 arrays to test greaterThan100 function    
let numStringSum1 = [8,14,57,20,8]; ////expected output true
let numStringSum2 = [2,3,1]; ////expected output false
console.log(greaterThan100(numStringSum1)); /////test function with 1st test array
console.log(greaterThan100(numStringSum2));//////test function with 2nd test array
/// 

    console.log(`
Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.`)
    ////ANSWER BELOW
    
/////uses the already declared function sumArray to create new arrow function that sums and divide by array length
let avgArray = (array) => (sumArray(array) / (array.length));
console.log(avgArray(numStringSum1)); ////test 1 - numStringSum1 = [8,14,57,20,8] - expected ouput = 21.4
console.log(avgArray(numStringSum2)); ////test 2 - numStringSum2 = [2,3,1] - expected ouput = 2
/// 

    console.log(`
Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)
    ////ANSWER BELOW
 /////using already declared function avgArray, create new array to compare numStringSum1 and numStringSum2    
function greaterAvgArray(array1, array2){
    let avg1 = avgArray(array1);
    let avg2 = avgArray(array2);
    if(avg1 > avg2){
        return true;
    } else return false;
}
////test function
console.log(greaterAvgArray(numStringSum1,numStringSum2)); ///expected output true
////2nd test case - create 2 new test arrays
let averageArray1 = [1,1,5,8];
let averageArray2 = [9,14,20];
console.log(greaterAvgArray(averageArray1,averageArray2)); ////expected output false
/// 
    
    console.log(`
Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)
    ////ANSWER BELOW
    
////create new function 'willBuyDrink'
function willBuyDrink(isHotOutside,moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true;
    } else return false;
}
////test function
console.log(willBuyDrink(true,25.32)); ///test 1 - expected output: true
console.log(willBuyDrink(true, 4.29));///test 2 - expected output: false
console.log(willBuyDrink(false,47.32));///test 3 - expected output: false
/// 
    
    console.log(`
Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)
////ANSWER BELOW
console.log(`
    --> Problem: In order to organize business finances, it is important to be able to group dates in meaningful ways. 

        ~~~ Fiscal quarter is one of the primary ways in which business activities, income, and expenses can be categorized. 
        ~~~ The following function uses the calendar year as fiscal year.
        ~~~ Dates applicable to this solution include: date(s) of service; card payment transaction dates; payer check date; transaction clearance date; payroll date; etc. 

    --> Solution: Create new function that categorizes a date by fiscal quarter
    
        ~~~ 1. Log different ways that dates can be identified and formated as strings of dates
        ~~~ 2. Create function that identifies fiscal quarter for given date  
        ~~~ 3. Create function that displays date's year and fiscal quarter`);
    const currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let today = (`${month}/${day}/${year}`);
        let nextQ = month + 3;
        let nextYear = year + 1;
//////////////////////////////////////////////////////////
    console.log(`
*** 1. Compare different date displays - Test Date --> Formatted Date ***`)   
    console.log(`
        "08/26/2024" --> 08/26/2024`)
    console.log(`
        Today --> ${today}`);
    console.log(`
        Current Date --> ${currentDate}`);
    console.log(`
        Next Quarter --> ${nextQ}`);
    console.log(`
        Next Year --> ${nextYear}`);
////New Function 'fiscalQ' that categorizes and labels a given date's respective fiscal quarter///////////////////////////////////////////////////////////     
    function fiscalQ(date){
        const dateInst = new Date(date);
        let month = dateInst.getMonth() + 1;
        let year = dateInst.getFullYear();
        if(month >= '1' && month < '4'){
            return (`Q1`);
        } else if(month >= '4' && month < '7'){
            return (`Q2`);
        } else if(month >= '7' && month < '10'){
            return (`Q3`);
        } else if(month >= '10' && month < '13'){
            return (`Q4`);
        }
    }
////New function 'quarter' that displays a date's fiscal quarter with year///////////////////////////////////////////////////////////   
    const quarter = (date) => {
        let qDate = new Date();
        let qYear = qDate.getFullYear();
        return (`${qYear}: ${fiscalQ(date)}`);
    }
////Test cases for function 'fiscalQ'///////////////////////////////////////////////////////////         
console.log(`
*** 2. Categorize and Display - Test Date --> Fiscal Quarter ***`);      
    console.log(`
        02/26/2024 --> ${fiscalQ(`02/26/2024`)}`);
    console.log(`
        05/24/2024 --> ${fiscalQ(`05/24/2024`)}`);
    console.log(`
        08/13/2024 --> ${fiscalQ(`08/13/2024`)}`);
    console.log(`
        11/26/2024 --> ${fiscalQ(`11/26/2024`)}`);
    console.log(`
        Today --> ${fiscalQ(`${today}`)}`);
    console.log(`
        Current Date --> ${fiscalQ(`${currentDate}`)}`);
    console.log(`
        Next Quarter --> ${fiscalQ(`${nextQ}`)}`);
////Test cases for function 'quarter'///////////////////////////////////////////////////////////    
console.log(`
*** 3. Categorize and Display - Test Date --> Year: Fiscal Quarter ***`);       
    console.log(`
        03/18/2023 --> ${quarter(`03/18/2023`)}`);
    console.log(`
        07/25/2021 --> ${quarter(`07/25/2021`)}`);
    console.log(`
        09/01/2022 --> ${quarter(`09/01/2022`)}`);
    console.log(`
        12/31/2024 --> ${quarter(`12/31/2024`)}`);
    console.log(`
        Today --> ${quarter(`${today}`)}`);
    console.log(`
        Current Date --> ${quarter(`${currentDate}`)}`);
    console.log(`
        Next Quarter --> ${quarter(`${nextQ}`)}`);
///////////////////////////////////////////////////////////////   