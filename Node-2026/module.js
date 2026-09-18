const fs=require('fs');
const os=require('os');
// modules needs to be import explicitly
// fs.writeFileSync('dummy.txt','text written using filesystem');
console.log(os.platform());
console.log(os.hostname());

//objects does not need to import 
console.log(process.cwd());