//const path = require('path');
const fs = require('fs');

const clearImage = filePath => {
    // filePath = path.join(__dirname, '..', filePath);
    // fs.unlink(filePath, err => console.log(err));
    try {
        if (fs.existsSync(filePath)) {
            let newFilePath;
            if(filePath.charAt(0) === '/'){
                newFilePath = filePath.substr(1);
            } else{
                newFilePath = filePath;
            }
            fs.unlink(newFilePath, (err) => {
                if(err){
                    throw (err);
                }
            });
        }
    } catch(err) {
    console.error(err)
    }
};

exports.clearImage = clearImage;