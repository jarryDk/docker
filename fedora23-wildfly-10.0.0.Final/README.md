#Docker - WildFly 10.0.0.Final on Feodra 23 



## Startup

### On Host

[root@jarry fedora23-wildfly-10.0.0.Final]# mkdir /data/db

[root@jarry fedora23-wildfly-10.0.0.Final]# systemctl start docker

## Build

[root@jarry fedora23-wildfly-10.0.0.Final]# docker build --rm=true -t jarry/fedora23-wildfly .

## RUN Interactive

[root@jarry fedora23-wildfly-10.0.0.Final]# docker run -i --name=wildfly -p 8080:8080 -p 9990:9990 jarry/fedora23-wildfly

## Restart on boot

[root@jarry fedora23-wildfly-10.0.0.Final]# docker run -d --privileged=true --restart=always --name=logstash jarry/fedora23-wildfly




