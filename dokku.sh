#!/bin/bash
####################################
#
# Deploy app to dokku.
#
####################################

#tars build

tars build --release

# git add all and push to dokku
cp -R ./export/build/ ./export-build/

cd ./export
git init
git add -A
git commit -m"deploy"
git push dokku@dino.xdsoft.ru:tars-bootstrap-static-app master --force
rm -rf ./git
cd ../
