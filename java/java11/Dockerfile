FROM centos:7
MAINTAINER Michael Bornholdt Nielsen, jarry.dk
RUN yum update -y \
  && mkdir /usr/lib/jvm/ \
  && yum -y install unzip \
  && curl -O https://download.java.net/java/early_access/jdk11/12/GPL/openjdk-11-ea+12_linux-x64_bin.tar.gz \
  && tar xvf openjdk-11-ea+12_linux-x64_bin.tar.gz -C /usr/lib/jvm/ \
  && yum clean all \
  && rm openjdk-11-ea+12_linux-x64_bin.tar.gz \
  && rm -rf /var/cache/yum
ENV JAVA_HOME /usr/lib/jvm/jdk-11
ENV PATH "$PATH":/${JAVA_HOME}/bin:.:
