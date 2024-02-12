// while writing js code, to delay execution of fn use setTimeout

// const a = setTimeout(()=>{
//     console.log("Setting timeout of 5 seconds.");
//     function printName(name) {
//         var a = prompt("Enter Your Name: ");
//         console.log(a);
//     }
// },5000);

// console.log("Hey There!");

// setInterval(()=>{
//     console.log("Runs after every 2 seconds");
// },2000);

console.log("Hello --> Number 1");

setImmediate(()=>{
    console.log('Running before timeout --> Number 3');
});

setTimeout(()=>{
    console.log('The timeout running last --> Number 4');
},5000);

process.nextTick(()=>{
    console.log('Running at next tick --> Number 2');
})