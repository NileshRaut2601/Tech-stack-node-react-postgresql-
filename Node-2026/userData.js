const queryString=require('querystring');
function userData(req,resp){
    console.log("UserData");
    let datachunk=[]
    req.on('data',(chunk)=>{
        datachunk.push(chunk);
    });
    req.on('end',()=>{
        let rawdata=Buffer.concat(datachunk).toString();
        let readabledata=queryString.parse(rawdata);
        let datastring="My name is "+readabledata.name+".My emailid is "+readabledata.email;
        resp.end(datastring);
    });
  
}

module.exports=userData;