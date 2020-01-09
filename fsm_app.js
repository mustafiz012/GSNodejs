/*
Working with file system module
* */
const fs = require('fs');
//create file
/*fs.writeFile('example.txt', "This is an example", (err) => {
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
});*/

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

// ==>>working with directory/folder
//create a folder/dir
/*fs.mkdir('utils', (err) => {
    if (err)
        console.log(err);
    else {
        //delete that folder/dir after successful creation
        fs.rmdir('utils', (err)=>{
            if (err)
                console.log(err);
            else
                console.log('Successfully deleted the folder')
        })
    }
});*/

/*fs.mkdir('utils2', (err) => {
    if (err)
        console.log(err);
    else {
        console.log('Successfully created the folder')
        //create a file inside folder after successful creation
        fs.writeFile('./utils2/example.txt', 'Example file text', (err1 => {
            if (err1)
                console.log(err1)
            else
                console.log('File successfully created')
        }))
    }
});*/
//delete file and dir
/*fs.unlink('./utils2/example.txt', err => {
    if (err)
        console.log(err);
    else {
        console.log('File deleted successfully');
        fs.rmdir('utils2', err1 => {
            if (err1)
                console.log(err1);
            else
                console.log('Folder deleted successfully')
        })
    }
});*/

fs.mkdir('example', (err) => {
    if (err) {
        console.log(err);
        fs.readdir('example', (err1, files) => {
            for (let file of files) {
                fs.unlink('./example/'+file, err2 => {
                    if (err2)
                        console.log(err2);
                    else
                        console.log('File deleted successfully')
                })
            }
        });
        fs.rmdir('example', err1 => {
            if (err1)
                console.log(err1);
            else
                console.log('example folder deleted successfully')
        })
    } else {
        console.log('Successfully created the folder');
        //create a file inside folder after successful creation
        fs.writeFile('./example/a1.txt', 'a1 file text', (err1 => {
            if (err1)
                console.log(err1);
            else
                console.log('File successfully created')
        }));
        fs.writeFile('./example/a2.txt', 'a2 file text', (err1 => {
            if (err1)
                console.log(err1);
            else
                console.log('File successfully created')
        }));

        fs.readdir('example', (err1, files) => {
            if (err1)
                console.log(err1);
            else
                console.log(files)
        })
    }
});