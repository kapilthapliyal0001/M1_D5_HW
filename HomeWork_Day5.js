/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "Check the test";


console.log("-----------------NEXT QUE-------------------")


/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20;

console.log("-----------------NEXT QUE-------------------")

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random  = Math.floor(Math.random() * 20 );
console.log(random);


console.log("-----------------NEXT QUE-------------------")

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {name : "Kapil Prasad", surname : "Thapliyal", age : 25};
console.log(me);


console.log("-----------------NEXT QUE-------------------")

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age;
console.log(me);


console.log("-----------------NEXT QUE-------------------")


/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
// let code_lang = ["Java", "Javascript", "Python"];
let code = ["Java", "Javascript", "Python"];
me.code_lang = code;
console.log(me);


console.log("-----------------NEXT QUE-------------------")

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

// delete code[-1];
// console.log(code);
// me.code_lang = code;
// console.log(me);


console.log("-----------------NEXT QUE-------------------")

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = function() {
    let num = Math.floor(Math.random() * 6) + 1;
    return num;
}


console.log("Que 1:");
console.log(dice());


console.log("-----------------NEXT QUE-------------------")

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function(n1, n2) {
   return (n1 >= n2) ? n1 : n2 ; 
}

console.log(whoIsBigger(42,20));


console.log("-----------------NEXT QUE-------------------")

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = function(input) {
    return input.split(" ");
}

console.log(splitMe("This a line which will be split into many parts"));


console.log("-----------------NEXT QUE-------------------")

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true 
    it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = function(input, bool) {
    return (bool == true) ? input.slice(1) : input.slice(0,-1);
}

console.log(deleteOne("Kapil", true));
console.log(deleteOne("Kapil", false));



console.log("-----------------NEXT QUE-------------------")

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = function(input) {
    let new_input = input.replace(/[0-9]/g, '');
    return new_input;
}

console.log(onlyLetters("bciec 3p vcow4  ws93w4f "));


console.log("-----------------NEXT QUE-------------------")

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = function(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)    // use of RegEx // https://ui.dev/validate-email-address-javascript/
}

console.log(isThisAnEmail("ncioenceco#84ipioaecjc.com"));  //false

console.log(isThisAnEmail("kapilthapliyal0001@gmail.com")); //true



console.log("-----------------NEXT QUE-------------------")

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const whatDayIsIt = function(){
    let week = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];
    let d = new Date();
    let n = d.getDay()
    return week[n - 1];
}

console.log("Today is " + whatDayIsIt() + " !");

console.log("-----------------NEXT QUE-------------------")


/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const RollTheDices = function(num) {
    let sum = 0;
    let arr = []
    let result = {};

    for(i = 0; i < num; i++) {
        let dice_num = dice();
        arr.push(dice_num);
        sum += dice_num;
    }
    result.sum = sum;
    result.values = arr;
    return result;
}

console.log(RollTheDices(5));


console.log("-----------------NEXT QUE-------------------")

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

const howManyDays = function(date1, date2) {      //https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
    var date1 = new Date(date1);
    var date2 = new Date(date2);
    // var Difference_In_Time = date2.getTime() - date1.getTime();
    // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let diffDays = parseInt((date1 - date2) / (1000 * 60 * 60 * 24), 10);
    return diffDays; 
}


console.log("The difference of days is: " + howManyDays("12/09/2018", "04/11/2013"));

console.log("-----------------NEXT QUE-------------------")

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

let isTodayMyBirthday = function() {

}

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!


/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

// let que11 = {name: "Kapil" , strp : "Check", passed : "Perfect!"};


// const deleteProp = function(new_obj, str1) {
//     delete new_obj.str1;
//     return new_obj;
// }

// deleteProp(que11, string);

// delete que11.str1;

// deleteProp(que11, strp)


/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ];

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

const olderMovie = function() {
    let year = 0;
    let index = 0;

    for (i = 0; i< movies.length; i++) {
        let new_year = parseInt(movies[i].Year)
        if (new_year > year) {
            year = new_year;
            index = i;
        }
    }
    return movies[index].Title;
}

console.log(olderMovie() + " -------IS THE OLDEST MOVIE");

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

const countMovies = function() {
    let num = movies.length
    return num;
}

console.log("The number of movies are: --------" + countMovies());

console.log("-----------------NEXT QUE-------------------")

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

let onlyTheTitles = function() {
    let arr = []
    for (i = 0; i < movies.length ; i++) {
        let new_title = movies[i].Title;
        arr.push(new_title)
    }
    return arr;
}

console.log(onlyTheTitles());

console.log("-----------------NEXT QUE-------------------")

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

const onlyInThisMillennium = function() {
    let arr = [];
    for (i = 0; i < movies.length; i++) {
        if (movies[i].Year > 2000) {
            arr.push(movies[i].Title);
        }
    }
    return arr;
}

console.log(onlyInThisMillennium() + "------------- Are the movies only in this millenium");



console.log("-----------------NEXT QUE-------------------")

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

const getMovieById = function(id) {
    for (i = 0; i < movies.length; i++) {
        if (movies[i].imdbID === id) {
            return movies[i].Title;
        }
    }
}

console.log(getMovieById("tt4154796") + "------- --- - - -  Is the movie with the given ID");

console.log("-----------------NEXT QUE-------------------")

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

const sumAllTheYears = function() {
    let sum = 0;
    for (i = 0; i < movies.length; i++) {
        sum += parseInt(movies[i].Year);
    }
    return sum;
}

console.log(sumAllTheYears() + " Is the SUM of all the years movies have been provided !");

console.log("-----------------NEXT QUE-------------------")

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/


const searchByTitle = function(name) {
    let arr = [];
    for (i = 0; i < movies.length ; i++) {
        if (movies[i].Title.includes(name)) {
            arr.push(movies[i].Title);
        }
    }
    return arr;
}

console.count("The movies with the given NAMES ARE:  =======" + searchByTitle("Ave"));

console.log("-----------------NEXT QUE-------------------")

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

const searchAndDivide = function(name) {
    let match1 = [];
    let match2 = [];

    let result = {};

    for (i = 0; i < movies.length ; i++) {
        if (movies[i].Title.includes(name)) {
            match1.push(movies[i].Title);
        }
        else {
            match2.push(movies[i].Title);
        }
    }
    result.match = match1;
    result.match = match2;

    return result;
}

console.count(searchAndDivide("Ave"));


console.log("-----------------NEXT QUE-------------------")

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

const removeIndex = function(num) {
    let result = movies.splice(num, 1);
    return result;
}

console.log(removeIndex(4) + "The movie details from the 5th index has been removed!! ");


// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

const halfTree = function(num) {
    for (i = 1; i <= num; i++) {
        console.log("*".repeat(i));
    }
}

halfTree(5);

console.log("-----------------NEXT QUE-------------------")

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

const tree = function(num) {
    for(i = 1; i <= num; i++) {
        let max_star = 2 * num - 1;
        let curr_star = 2 * i - 1;
        console.log(" ".repeat(max_star - curr_star / 2) + "*".repeat(curr_star) + " ".repeat(max_star - curr_star / 2));
    }
}

tree(5);

console.log("-----------------NEXT QUE-------------------")

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

const isPrime = function(num1) {
    let check = true;
    if (num1 == 1) {
        return false;
    }
    else {
        for( i= 2; i < Math.floor(num1 / 2); i++) {
            if (num1 % i == 0) {
                check =false;
                break
            }
        }
        return check == true ? true : false;
    }
}

console.log(isPrime(17));

