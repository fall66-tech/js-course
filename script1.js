// console.log("hello1");

// setTimeout(() => {
//     console.log("hello2");
// },2000)

// console.log("hello3");

let p1 = new Promise((resolve, reject) => {
    console.log("promise pending")
    setTimeout(()=>{
        console.log("im a promise and im fulfilled");
        resolve(true)
    },5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("promise pending")
    setTimeout(()=>{
        console.log("im a promise and im rejected");
        reject(new Error("this is an error"))
    },5000)
})

console.log(p1, p2)