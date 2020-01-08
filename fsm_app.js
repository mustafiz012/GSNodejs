/*
Working with file system module
* */
const fs = require('fs');
//create file
fs.writeFile('example.txt', "This is an example", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('File successfully created');
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err)
                console.log(err);
            else
                console.log(file)
        })
    }
});

/*
fs.rename('example.txt', 'example2.txt',
    (err) => {
        if (err)
            console.log(err);
        else
            console.log('Successfully renamed')
    });*/

/*
fs.appendFile('example.txt', '\nSome data is being appended', (err)=>{
    if (err)
        console.log(err);
    else
        console.log('Successfully appended data to file')
});*/

/*
fs.unlink('example.txt', (err) => {
    if (err)
        console.log(err);
    else
        console.log('Successfully deleted the file')
});*/
