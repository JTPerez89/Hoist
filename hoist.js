// ----- 1 -----

console.log(hello);
var hello = 'world';

/* 
var hello
console.log(hello) = undefined
var hello = 'world'
 */

// ----- 2 -----

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/*
var needle
test()
var needle = 'haystack'
test
    var needle = 'magnet'
    console.log(needle); == 'magnet'
*/

// ----- 3 -----

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/*
var brendan
function print()
var brendan = 'super cool';
console.log(brendan); == 'super cool'
*/

// ----- 4 -----

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

/*
var food
function eat()
var food = 'chicken'
console.log(food); == 'chicken'
food = 'half-chicken'
console.log(food); == 'half-chicken'
var food = 'gone';
*/

// ----- 5 -----

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

/*
var mean
syntax error mean in not a function
*/

// ----- 6 -----

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*
var genre
function rewind()
console.log(genre); == undefined
var genre = "disco";
genre = "rock";
console.log(genre); == "rock"
var genre = "r&b";
console.log(genre); == "r&b"
console.log(genre); == "r&b" ------ actual "disco"
*/

// ----- 7 -----

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/*
dojo
function learn()
dojo = "san jose";
console.log(dojo); == "san jose"
dojo = "seattle";
console.log(dojo); == "seattle"
var dojo = "burbank";
console.log(dojo); == "burbank"
console.log(dojo); == "san jose"
*/

// ----- 8 -----

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

/*
function makeDojo
console.log(makeDojo("Chicago", 65));
const dojo = {};
dojo.name = "Chicago";
dojo.students = 65;
dojo.hiring = true;
return dojo;
console.log(makeDojo("Berkeley", 0));
const dojo = {};
dojo.name = "Berkeley";
dojo.students = 0;
dojo = "closed for now";
return dojo;

Actual == typeError
*/