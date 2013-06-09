#!/bin/bash

# Enable tracing and exit on first failure
set -xe


# Define reasonable set of browsers in case we are running manually from commandline
if [[ -z "$BROWSERS" ]]
then
  BROWSERS="Chrome"
fi


karma start test/karma.config.js \
  --single-run \
  --browsers="$BROWSERS" \
  --reporters="dots,junit" 
  
node ./scripts/web-server.js > /dev/null &
WEBSERVER_PID=$!

trap "{ kill $WEBSERVER_PID; exit; }" EXIT

karma start test/karma-e2e.config.js \
  --single-run \
  --browsers="$BROWSERS" \
  --reporters="dots,junit" 