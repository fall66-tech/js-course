const loadscript = async (src) => {
    let script = document.createElement("script")
    script.src = src
    console.log("this is the new script tag")
    console.log("this is the cdn link " +src)
    // console.log(script)
    document.head.append(script)
    
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")