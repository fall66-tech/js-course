try {
    // throw new Error("you will be great");
    throw new ReferenceError("you will be great");
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}