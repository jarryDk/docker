FROM fedora:26

MAINTAINER Michael Bornholdt Nielsen michaelbornholdtnielsen@gmail.com

RUN yum -y update \
	&& yum clean all \
	&& curl -O http://download.java.net/java/GA/jdk9/9/binaries/openjdk-9_linux-x64_bin.tar.gz \
	&& tar -zxvf openjdk-9_linux-x64_bin.tar.gz -C /usr

ENV JAVA_HOME /usr/jdk-9

ENV PATH "$PATH":/${JAVA_HOME}/bin:.:


