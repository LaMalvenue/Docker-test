process.on('SIGINT', () => {
    console.log('Caught interrupt signal');
    process.exit();
})

process.on('SIGTERM', () => {
    console.log('Caught interrupt signal');
    process.exit();
})

let n = 0;

setInterval(() => {
    console.log("Counting " + n++);
}, 1000);