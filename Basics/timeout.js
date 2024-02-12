// while writing js code, to delay execution of fn use setTimeout

// const a = setTimeout(()=>{
//     console.log("Setting timeout of 5 seconds.");
//     function printName(name) {
//         var a = prompt("Enter Your Name: ");
//         console.log(a);
//     }
// },5000);

// console.log("Hey There!");

setInterval(()=>{
    console.log("Runs after every 2 seconds");
},2000);