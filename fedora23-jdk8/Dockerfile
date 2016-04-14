FROM fedora:23

MAINTAINER Michael Bornholdt Nielsen mni@jarry.dk

ENV JAVA_DOWNLOAD_FOLDER 8u77-b03
ENV JAVA_VERSION 8u77

## 
# update and add tools
RUN dnf -y update && dnf clean all
RUN dnf install wget tar findutils -y

##
# Add Java
RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u77-b03/jdk-8u77-linux-x64.rpm
RUN rpm -ivh jdk-8u77-linux-x64.rpm

ENV JAVA_HOME="/usr/java/latest"

RUN echo "JAVA_HOME : $JAVA_HOME"

