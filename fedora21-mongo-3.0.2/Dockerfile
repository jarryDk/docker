FROM fedora:21

MAINTAINER Michael Bornholdt Nielsen mni@jarry.dk

RUN yum -y update && yum clean all

ENV MONGO_MAJOR 3.0
ENV MONGO_VERSION 3.0.2

# add our user and group first to make sure their IDs get assigned consistently, regardless of whatever dependencies get added
RUN groupadd -r mongodb && useradd -r -g mongodb mongodb

RUN yum install wget -y

RUN yum install tar -y

RUN wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-$MONGO_VERSION.tgz

RUN mkdir -p /opt/mongo && chown -R mongodb:mongodb /opt/mongo

RUN tar -xvf mongodb-linux-x86_64-rhel70-$MONGO_VERSION.tgz -C /opt/mongo

RUN mkdir -p /data/db && chown -R mongodb:mongodb /data/db

VOLUME /data/db

EXPOSE 27017
CMD ["/opt/mongo/mongodb-linux-x86_64-rhel70-3.0.2/bin/mongod"]
