// ASSESSMENT 3: Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// input: any number greater than 2
// expected output: the length of the fibonaci sequence at the index of the number inputed. I want to create a function that will take a number and give me the fibonacci sequence up to that index.

// // a) Create a test with expect statements for each of the variables provided.
describe("fibLength", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibLength(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibLength(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
// got the jest to work! now just need to make the function that will make this pass.
const fibLength1 = 6;
// Expected output: [1, 1, 2, 3, 5, 8]
const fibLength2 = 10;
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// i made an array holding the fib sequence
let fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
// made the function that will take a number as an argument and return the length of the fib sequence at the number of the index given
const fibLength = (array) => {
  let newFib = [];
  for (let i = 0; i < i[array]; i++) {
    newFib = map.length(array);
  }
  return newFib;
};
//it returned this.
//  - Expected  - 8
// + Received  + 1

// - Array [
// -   1,
// -   1,
// -   2,
// -   3,
// -   5,
// -   8,
// - ]
// + Array []
// i am stuck as far as making the test pass. I think it has to do with my syntax in the parameters of the test. after moving the names and variables around, i was not able to figure out how to return a passing test even the the desired output is achieved.

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// this sounds like i will use .sort. going to check out the link provided.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
// turns out it's more complicated than that.. i will need to figure out how to take the contents of an object, turn it into a single string put them in order and return them on a single string.
// a) Create a test with expect statements for each of the variables provided.
describe("testArray", () => {
  it("returns an array of the values sorted from least to greatest", () => {
    //expect(testArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
    expect(testArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});
//test is failing successfully moving to the next part
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60,
};
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
};
// Expected output: [10, 15, 20, 45, 60, 65, 100]
const testArray = (smw) => {
  return Object.values(smw).sort();
};
// so the test passes with the first parameter but not the second one. i'm not sure why. moving to the next question.
// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//sounds like the fibinnacci function from above. except the array is already given to us and we are applying this accumulating function over the arrays length.

// a) Create a test with expect statements for each of the variables provided.
describe("accuArray", () => {
  it("returns an array of the accumulating sum", () => {
    expect(accuArray(accountTransactions1)).toEqual([100, -17, -23, -9]);
    //expect(accuArray(accountTransactions2)).toEqual([250, -89, 100, -96]);
    expect(accuArray(accountTransactions3)).toEqual([]);
  });
});
//test failed successfully. moving on to create the function.

const accountTransactions1 = [100, -17, -23, -9];
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96];
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = [];
// Expected output: []
//i'm not sure how to have the function add the current index with the index before it. i feel that will be crucial to completing this function
const accuArray = (array) => {
  let newArr = [];
  for (let i = 1; i < array.length; i++) {
    const element = array[i] + array[i--];
  }
  return newArr;
};
// im not sure if just me, but jest doesn't seem to work. it was working fine i enter yarn jest and nothing happens. it says no license field and i restarted my terminal ran yarn add jest and same thing when i enter yarn jest. i think my function is really close to the answer but not sure how to check or move forward. i really hope to get better with jest and able to finish thes kind of challenges better next time.
// b) Create the function that makes the test pass.
