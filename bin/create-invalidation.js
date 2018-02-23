const AWS = require('aws-sdk');

let cf = new AWS.CloudFront({apiVersion: '2016-11-25', region: 'us-east-1'});

const distributionId = process.argv[2];
const paths = process.argv[3];

const now = Math.round(Date.now() / 1000);
const rand = Math.round(Math.random() * 1000000);
const params = {
    DistributionId: distributionId, /* required */
    InvalidationBatch: { /* required */
        CallerReference: `aws-sdk-js-${now}-${rand}`, /* required */
        Paths: { /* required */
            Quantity: 1, /* required */
            Items: [
                paths
            ]
        }
    }
};

cf.createInvalidation(params, (err, data) => {

    if (err) {

        console.log(err, err.stack);

    } else {

        // successful response
        console.log(data);

    }

});
