#!/bin/bash

aws s3 cp --acl public-read --cache-control max-age=10 index.html s3://alexjpaz.com/days-since/index.html
#aws lambda update-function-code --function-name daysSinceReset --zip-file fileb://
