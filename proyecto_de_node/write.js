
const fs = require("fs");

/*fs.writeFile("./hola.txt", "utf8", (err, data) => {
    if(err){
    console.log(err)
    return;
    }
    console.log("Data", data)
})*/

fs.writeFile('message.txt', 'hola mundo', 'utf8', (err) => {
    if(err){
    console.log(err)
    return;
    }
    console.log("archivo guardado")
})