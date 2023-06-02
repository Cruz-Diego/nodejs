
const fs = require("fs");

fs.appendFile('message.txt', ' mas texto agregado', 'utf8', (err) => {
    if(err){
    console.log(err)
    return;
    }
    console.log('se agrego contenido al archivo')
})