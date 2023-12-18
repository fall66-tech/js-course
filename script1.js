const loadscript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    console.log("this is the new script tag");
    // console.log("this is the cdn link " + src);
    script.onload = () => {
    //   resolve(50);
      resolve(src + " done success");
    };

    document.head.append(script);
  });
};
    let a = loadscript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"

);
a.then((value)=>{
    console.log(value)
})
// const main2 = async ()=> {
//     console.log(new Date().getMilliseconds())
//     let a = await loadscript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"

// );
// console.log(new Date().getMilliseconds())

// console.log(a)

// }

// main2()

