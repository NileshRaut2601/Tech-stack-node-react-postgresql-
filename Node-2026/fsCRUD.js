const fs=require("fs");

let operation=process.argv[2];

if(operation=="write"){

    let filename=process.argv[3];
    let content=process.argv[4];

    fs.writeFileSync('files/'+filename+".txt",content);
}
else{if(operation=="read"){

    let filename=process.argv[3];
   

    let data=fs.readFileSync('files/'+filename+".txt",'utf-8');
    console.log(data)
}

else{
if(operation=="update"){

    let filename=process.argv[3];
    let content=process.argv[4];

    fs.appendFileSync('files/'+filename+".txt",content);
}
else{
    if(operation=="delete"){
        let filename=process.argv[3];

        fs.unlinkSync("files/"+filename+".txt");
    }
}

}

}
// fs.writeFileSync("files/apple.txt","This is a fruit");
// fs.writeFileSync("files/banana.txt","This is a fruit");

// fs.unlinkSync("files/banana.txt");  Used to delete file

// let data=fs.readFileSync("files/apple.txt",'utf-8'); 
// console.log(data);

// fs.appendFileSync("files/apple.txt"," This is a apple");