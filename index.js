// # Programming Basics: For Loops

// These exercises are designed for practising "for" loops. Print all your results to the console.

// 1. **Addition.** 
// Write a program to add up the numbers 1 to 20.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbers.length; i++) {
    const sum = numbers[i] + numbers[i];
    console.log(sum);
}

// 2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 

for (let i = 1; i <=5; i++) {

    if (i < 2) {
        console.log("There is " + i + " bottle of beer on the wall");
    } else {

    console.log("There are " + i + " bottles of beer on the wall"); 
    }

    
}

// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 20; i++) {
    
    if (i % 2) {
        console.log(i + " is odd.");
    }

    else {
        console.log(i + " is even.");
    }
}

// I did this correctly by sheer chance..... I thought % meant can be divided by 2, but the console was logging "2 is odd, 3 is even" etc. So I changed if i % 2 to "is odd". is % the remainder operator?? I cant figure it out online


// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let i = 0; i <= 10; i++) {

    for (let multiplier = 1; multiplier <= 10; multiplier++) {

        if (i < 1) {
            continue;
        } else {

       
        console.log(i * multiplier);
    }
}
}

// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (i = 1; i <= 100; i++) {

    
    if (i % 3 == 00 && i % 5 == 00) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    }  else {
        console.log(i);
    }
}


// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.

for (i = 1; i <1000; i++) {

    if (i % 3 == 0) {
        console.log(i);
    } else if (i % 5 == 0) {
        console.log(i);
    }

}


// **Bonus** 

// 7. Write programs that produce the following outputs: 
// >100 200 300 400 500 600 700 800 900 1000
// >
// >0 2 4 6 8 10
// >
// >3 6 9 12 15
// >
// >9 8 7 6 5 4 3 2 1 0
// >
// >1 1 1 2 2 2 3 3 3 4 4 4
// >
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat


