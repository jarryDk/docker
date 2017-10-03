FROM fedora:26

MAINTAINER Michael Bornholdt Nielsen michaelbornholdtnielsen@gmail.com

ENV MONGO_MAJOR 3.0
ENV MONGO_VERSION 3.4.9
ENV INSTALL_DIR /

RUN yum -y update && yum clean all \
		&&  groupadd -r mongodb && useradd -r -g mongodb mongodb \
		&& curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-$MONGO_VERSION.tgz \
		&& tar -zxvf mongodb-linux-x86_64-rhel70-$MONGO_VERSION.tgz -C ${INSTALL_DIR} \
		&& mkdir -p /data/db && chown -R mongodb:mongodb /data/db

ENTRYPOINT /mongodb-linux-x86_64-rhel70-${MONGO_VERSION}/bin/mongod

VOLUME /data/db

EXPOSE 27017
