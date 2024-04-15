let marvel_heroes=["thor","Ironman","Spiderman"];
let dc_heroes=["superman","batman","flash"];
console.log(marvel_heroes);
console.log(dc_heroes);

//now we want the two array to be combined
//here we will use the concept of spread ...

let new_arr=[...marvel_heroes,...dc_heroes];
console.log(new_arr);


let marks1=[92,84,72];
let marks2=[48,76,92];

let new_marks=[95,...marks1,62,...marks2,33];
//... acts as a spread operator which breaks down the elements of array into single element
//to understand this remember the concept of glass and water
console.log(new_marks);


let score1=96
let score2=85
let score3=74

//now we have to make a list of these three score
let new_score=[Array.of(score1,score2,score3)];
console.log(new_score);