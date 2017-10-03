#!/bin/bash

if [ ! -d "/data/db" ] ; then
	mkdir -p /data/db
fi

sudo docker run -i --name=mongodb -p 27017:27017 jarrydk/mongodb:3.4.9
