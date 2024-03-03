const AWS = require('aws-sdk');
const fs = require('fs');

const credentials = {
    accessKey: 'ACCESS_KEY',
    secret: 'SECRET_KEY',
    bucketName: 'S3_BUCKET_NAME'
};

const s3 = new AWS.S3({
    accessKeyId: credentials.accessKey,
    secretAccessKey: credentials.secret
});

const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: credentials.bucketName,
        Key: fileName,
        Body: fileContent
    };

    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

module.exports = {
    uploadFile
}