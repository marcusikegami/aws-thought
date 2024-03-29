const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// Set the region
AWS.config.update({ region: 'us-west-2' });
// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
var bucketParams = {
    Bucket: 'user-images-' + uuidv4(),
};

s3.createBucket(bucketParams, (err, data) => {
    if(err) {
        console.log('Error', err);
    } else {
        console.log('Bucket Success');
    }
})
