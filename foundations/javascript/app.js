// alert('This is working!');

const count = () => {
    let counter = 0;

    document.getElementsByClassName('count');
};

// let num = 35;
// if (num % 2 === 0) {
//     console.log('Yay its a even num!');
// } else {
//     console.log('Oh No! It\'s odd!')
// }

/* 
    Part 1: 
        1: true
        2: true
        3:false?
        4:true
        5:false...I believe && means they both need to be true?
        6:true.
        7:true

    Part 2:
    1: "Keep it up!"
    2: when you write an if statement such as: if (isLearning) you are simply checking to see if anything exists within that variable. In this case it is a boolean.

    1:I believe it will console .log "third" because the first condition will return undefined soo it will go to the next check, but both are falsey for second check. The third is the first to return a truthy value.
    2:undefined
    3:No, because an empty variable is undefined, which is falsey.
    4:No, it is a falsey value because it is an empty string.
    5:Yes, because all numbers excpet 0 are truthy.
*/

//Part 3:
// let randomNum = Math.random();
// let result = randomNum > 0.5 ? console.log('Over 0.5') : console.log('Under 0.5');

// if (randomNum > 0.5) {
//     console.log('Over 0.5');
// } else if (randomNum < 0.5) {
//     console.log('Under 0.5');
// } else {
//     console.log('Right on the money!');
// };

/*
    2: A falsey value is something that comes back as boolean false. 
    Falsey Values include:
    ''
    0
    undefined
    null
    false
    NaN
*/

const countingString = (string) => {
    // string = string.length;
    console.log('this is the length of the string: ', string.length); //string.length gets the number of the string which is 5 in this case...however the index is always -1 so 4 for the index because we count from 0;
    console.log(`This is the letter: ${string[5]} within string.`);
}
// countingString('hello');


const sortArray = (arr) => {
    arr.sort((a,b) => a -b);
    console.log('arr sorted', arr);
};

sortArray([1,100000,10,222,34,5,6,7777,8]);