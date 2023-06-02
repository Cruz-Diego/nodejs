const fs = require("fs");

fs.readdir("directory/", "utf8", (err, files) =>{
    if(err){
        console.log(err)
        return
    }
    console.log("files", files)
})