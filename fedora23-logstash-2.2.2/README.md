#Docker - Logstash 2.2.2 on Feodra 23 



## Startup

### On Host

[root@jarry fedora23-logstash-2.2.2]# mkdir /data/db

[root@jarry fedora23-logstash-2.2.2]# systemctl start docker

## Build

[root@jarry fedora23-logstash-2.2.2]# docker build --rm=true -t jarry/fedora23-logstash .

## RUN Interactive

[root@jarry fedora23-logstash-2.2.2]# docker run -i --name=logstash jarry/fedora23-logstash

## Restart on boot

[root@jarry fedora23-logstash-2.2.2]# docker run -d --privileged=true --restart=always --name=logstash jarry/fedora23-logstash




