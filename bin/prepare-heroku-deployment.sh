#!/bin/bash
#
# remove these files so that Heroku doesn't detect Node and try to do a Node build
#

if [ -f package.json ] ; then
	rm package.json
fi

if [ -f package-lock.json ] ; then
	rm package-lock.json
fi