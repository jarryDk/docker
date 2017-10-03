#!/bin/bash

sudo docker run -d --privileged=true --restart=always --name=mongodb -p 27017:27017 jarrydk/mongodb:3.4.9
