#!/bin/bash
#
# create a AWS CloudFront Invalidation request based on the branch
#

set -ev

if [ "${TRAVIS_BRANCH}" = "master" ]; then
    AWS_CLOUDFRONT_DISTRIBUTION_ID=E3IMNPFARDQRBW
elif [ "${TRAVIS_BRANCH}" = "develop" ]; then
    AWS_CLOUDFRONT_DISTRIBUTION_ID=E2TVYMKZI6J13B
else
    exit
fi

node bin/create-invalidation.js $AWS_CLOUDFRONT_DISTRIBUTION_ID '/*'
