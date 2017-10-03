#!/bin/bash

sudo docker run -d --privileged=true --restart=always --name=glassfish -p 4848:4848 -p 8009:8009 -p 8080:8080 -p 8181:8181 jarrydk/glassfish:5
