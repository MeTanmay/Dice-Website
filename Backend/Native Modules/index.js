const fs =require("fs");

// fs.writeFile("message.txt", "Hello from Node JS",(err)=>{
//     if(err) throw err;
//     console.log("File Saved Successfully");
// });

fs.readFile("message.txt", 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
})