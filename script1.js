// console.log("hello1");

// setTimeout(() => {
//     console.log("hello2");
// },2000)

// console.log("hello3");

// let p1 = new Promise((resolve, reject) => {
//     console.log("promise pending")
//     setTimeout(()=>{
//         console.log("im a promise and im fulfilled");
//         resolve(true)
//     },5000)
// })

// let p2 = new Promise((resolve, reject) => {
//     console.log("promise pending")
//     setTimeout(()=>{
//         console.log("im a promise and im rejected");
//         reject(new Error("this is an error"))
//     },5000)
// })

// console.log(p1, p2)

let P1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("value 1");

    },1000)
});
let P2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("value 2");
        // console.log("hey2");

    },2000)
});
let P3 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("value 3");
        // console.log("hey3");

    },3000)
});

// P1.then((value)=> {
//     console.log(value);
// })
// P2.then((value)=> {
//     console.log(value);
// })
// P3.then((value)=> {
//     console.log(value);
// })

let promiseall = Promise.all([P1,P2,P3]);
promiseall.then((value)=> {
    console.log(value);
})

