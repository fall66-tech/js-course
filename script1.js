async function harry(){
    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 2000);
    })
    let bloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("22 deg")
        }, 6000);
    })

    // delhiweather.then(alert)
    // bloreweather.then(alert)
    console.log("fetching delhi weather please wait.......... ")
    let delhiw = await delhiweather
    console.log("fetched delhi weather: " +delhiw)


    console.log("fetching blore weather please wait.......... ")
    let blorew = await bloreweather
    console.log("fetched blore weather: " +blorew)
    return [delhiw, blorew]
}

console.log("welocme to weather station")
let a = harry()

a.then((value)=>{
    console.log(value)
})