#Docker - MongoDb 3.0.2 on Feodra 21 

## Startup

### On Host

[root@jarry fedora21-mongo-3.0.2]# mkdir /data/db

[root@jarry fedora21-mongo-3.0.2]# systemctl start docker

##Build

[root@jarry fedora21-mongo-3.0.2]# docker build -rm -t jarry/fedora-mongodb .

##RUN Interactive

[root@jarry fedora21-mongo-3.0.2]# docker run -i --privileged=true -p 27017:27017 -v /data/db:/data/db mni/mongodb

## Restart on boot

[root@jarry fedora21-mongo-3.0.2]# docker run -d --privileged=true --restart=always -p 27017:27017 -v /data/db:/data/db mni/mongodb


## Links

http://www.colliernotes.com/2014/01/mongodb-with-external-volume-docker.html
https://github.com/fedora-cloud/Fedora-Dockerfiles/tree/master/mongodb



