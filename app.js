// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"

// function checkSignOfNumber(number) {
//     if (number >= 0) {
//       return "დადებითია";
//     } else {
//       return "უარყოფითია";
//     }
//   }
//   console.log(checkSignOfNumber(5))  
   

// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე

// function samNumbers() {
//     let summarize = 0;
//     for (let i = 1; i <= 100; i++) {
//       summarize += i;
//     }
//     return summarize;
//   }
//   const result = samNumbers();
//   console.log(result);


// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი

// function checkOddOrEven(number) {
//     if (number % 2 === 0) {
//       return "ლუწი"; 
//     } else {
//       return "კენტი"; 
//     }
//   }
  
//   var number = 7; 
//   var result = checkOddOrEven(number);
//   console.log(number + " არის " + result);



// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი

// შექმენით car ობიექტი
// const car = {
//     year: 2020,
//     model: "Toyota"
//   };
  
//   function getCarAge(carObject) {
//     const currentYear = new Date(8).getFullYear(2020);
//     const carYear = carObject.year;
//     const carAge = currentYear - carYear;
    
//     return carAge;
//   }
  
//   const age = getCarAge(car);
//   console.log("car model: " + age + " წელი");
  


// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი

// function findLargestDigit(numbers) {
//     if (!Array.isArray(numbers) || numbers.length === 0) {
//       return null; 
//     }
  
//     const largestDigit = -Infinity; 
//     for (const number of numbers) {
//       if (typeof number === 'number' && !isNaN(number)) {
//         const digits = Array.from(number.toString()).map(Number);
//         for (const digit of digits) {
//           if (digit > largestDigit) {
//             largestDigit = digit;
//           }
//         }
//       }
//     }
  
//     if (largestDigit === -Infinity) {
//       return null; 
//     }
  
//     return largestDigit;
//   }
  
//   const numbers = [1, 4, 88, 99, 123];
//   const largestDigit = findLargestDigit(numbers);
//   console.log(`უდიდესი ციფრი: ${largestDigit}`);


// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი

// function smallest(arr) {
//     if (arr.length === 0) {
//       return "ცარიელი";
//     }
//     const smallestNumber = Math.min(...arr);
//     return smallestNumber;
//   }
  
//   const numbers = [1, 8, 99, 111, 123];
//   const smallestNumber = smallest(numbers);
//   console.log(`უმცირესი რიცხვი არის: ${smallestNumber}`);
  

// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"

// function reverseee() {
//     const inputWord = prompt("Enter a word:");
//     const reversedWord = inputWord.split('').reverse().join('');
//     return reversedWord;
//   }
  
//   const reversed = reverseee();
//   console.log(`Reversed word: ${reversed}`);