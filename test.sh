#!/bin/bash

# Enable tracing and exit on first failure
set -xe


# Define reasonable set of browsers in case we are running manually from commandline
if [[ -z "$BROWSERS" ]]
then
  BROWSERS="PhantomJS,Chrome,Safari,Firefox"
fi


karma start test/karma.config.js \
  --single-run \
  --browsers="$BROWSERS" \
  --reporters="progress" 

karma start test/karma-e2e.config.js \
  	--single-run \
  --browsers="$BROWSERS" \
  --reporters="progress" 