const fs=require("fs");
// console.log("Apple a");
// console.log("Apple b");
// console.log("Apple c");

// console.log("Apple a");
// setTimeout(() => {
//     console.log("This wait for 2 sec");
//     console.log("Apple b");
    
// },2000);
// console.log("Apple c");

//Asynnchronous
// fs.readFile("text/Nilesh.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log("Internal server error");
//         return false;
//     }
//     console.log(data);
// });
// console.log("File Read");

//Synchronous
const data=fs.readFileSync("text/Nilesh.txt","utf-8");
console.log(data);
console.log("Synchronous");
