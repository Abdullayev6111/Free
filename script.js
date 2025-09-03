// String-2

// let n = +prompt("Son kiriting:");
// if (n >= 32 && n <= 126) {
//     let charCode = String.fromCharCode(n);
//     console.log(charCode);
// } else {
//     console.log("Kiritilgan son 32 dan 126 gacha bo'lishi kerak!");
// }

// String-3

// let n = +prompt("Son kiriting:");
// if (n >= 32 && n <= 126) {
//     let charCode1 = String.fromCharCode(n-1);
//     let charCode2 = String.fromCharCode(n+1);
//     console.log(charCode1);
//     console.log(charCode2);
// } else {
//     console.log("Kiritilgan son 32 dan 126 gacha bo'lishi kerak!");
// }

// String-4

// let n = +prompt("Son kiriting:");
// if (n >= 1 && n <= 26) {
//     let charCode = String.fromCharCode(n + 64);
//     console.log(charCode);
// } else {
//     console.log("Kiritilgan son 1 dan 26 gacha bo'lishi kerak!");
// }

// String-5

// let n = +prompt("Son kiriting:");
// if (n >= 1 && n <= 26) {
//     let charCode = String.fromCharCode(122-(n-1));
//     console.log(charCode);
// } else {
//     console.log("Kiritilgan son 1 dan 26 gacha bo'lishi kerak!");
// }

// String-6

// let n = +prompt("Belgi kiriting:");
// if (n >= 33 && n <= 47 || n >= 58 && n <= 64 || n >= 91 && n <= 96 || n >= 123 && n <= 126) {
//     console.log("Belgi");
//     let charCode = String.fromCharCode(n);
//     console.log(charCode);
// } else if (n >= 48 && n <= 57) {
//     console.log("Digit");
//     let charCode = String.fromCharCode(n);
//     console.log(charCode);
// } else if (n >= 65 && n <= 90 || n >= 97 && n <= 122) {
//     console.log("Lotin");
//     let charCode = String.fromCharCode(n);
//     console.log(charCode);
// } else {
//     console.log(0);
// }


// const countText = document.getElementById("count");
// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const clearBtn = document.getElementById("clear");
// let count = 0;
// let interval;
// startBtn.addEventListener("click", ()=>{
//     interval = setInterval(()=> {
//         count ++;
//         countText.innerHTML=count;
//     }, 1000);
// });

// stopBtn.addEventListener("click", ()=>{
//     clearInterval(interval);
// });

// clearBtn.addEventListener("click", ()=>{
//     count = 0;
//     countText.innerHTML=count;
//     clearInterval(interval);
// })