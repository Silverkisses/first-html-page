var image = document.getElementById("first-image").addEventListener("click", changeImage);


// function changeImage(){
//     console.log("This is my alert");
// }
var count = 0;
function changeImage(){
   if(count % 2 == 0){ 
    document.getElementById("first-image").src="/assets/images/creative-commons.png";
    count++;
    console.log(count);
   } else {
       document.getElementById("first-image").src="/assets/images/my-image.jpg";
       count++;
       console.log(count);
   }
}

// console.log("Hello World");

// console.log(10 % 2);
// console.log(11 % 2);
// console.log(9 % 3);
// console.log(11 / 3);

// let x = 100;

// console.log(x % 2);

// alert("This is a warning");

// for (i = 0; i < 10; i++) {
//     console.log(i);    
// }

// var happy = 31;

// // for (let happy = 0; happy > 0 ; happy--) {
// //     console.log(happy);
// // }

// while(happy < 100){
//     console.log(happy);
//     happy = happy + 50;
// }

var happy = 10;

// if(happy == 10){
//     console.log("This statement is true");
// } else if (happy > 10) {
//     console.log("You're very happy!");
// } else{
//     console.log("This statement is false");
// }

// if (happy == 10 && happy>= 10) {
//     console.log("Both conditions were true");
// } else {
//     console.log("Nothing is true");
// }

// if (happy == 10 || happy < 10) {
//     console.log("One of these was true.");
// }

// if (happy > 10 || happy != 10) {
//     console.log("One of these was true");
// } else {
//     console.log("Everything was false");
// }

// for (let i = 1; i <= 100; i++) {
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log("fizzbuzz");
//     } else if (i % 3 == 0) {
//         console.log("fizz");
//     } else if (i % 5 == 0) {
//         console.log("buzz");
//     } else {
//         console.log(i);
//     }
// }

