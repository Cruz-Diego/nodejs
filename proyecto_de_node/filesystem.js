const fs = require("fs");

fs.readFile("./hola.txt", "utf8", (err, data) => {
    if(err){
        console.log(err)
        return;
    }
    console.log("Data", data)
})