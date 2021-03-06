const AWS = require("aws-sdk");

let cf = new AWS.CloudFront({apiVersion: "2018-11-05", region: "us-east-1"});

const distributionId = process.argv[2] || process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID;
const paths = process.argv[3] || "/*";

if (!distributionId) {
    throw new Error(`Invalid Distribution ID: ${distributionId}`);
}

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

        throw err;

    } else {

        // successful response
        console.log(data);

    }

});
