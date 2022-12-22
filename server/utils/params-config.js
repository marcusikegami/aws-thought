const { v4: uuidv4 } = require('uuid');



const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: process.env.AWS_BUCKET_NAME || 'user-images-c9ff9e91-123f-44c5-bb18-0c518868be1d',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
    };

    return imageParams;
};



module.exports = params;