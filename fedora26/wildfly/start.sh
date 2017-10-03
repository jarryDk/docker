#!/bin/bash

sudo docker run -i --name=wildfly -p 8080:8080 -p 8443:8443 -p 9990:9990 jarrydk/wildfly:11.0.0.CR1
