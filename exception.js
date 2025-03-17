try {
    let x = 10 / 0; // No error, but let's create one
    console.log(y); // y is undefined → Error
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("This runs no matter what.");
}