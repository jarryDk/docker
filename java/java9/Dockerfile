FROM centos:7
MAINTAINER Michael Bornholdt Nielsen, jarry.dk
RUN yum update -y \
  && mkdir /usr/lib/jvm/ \
  && yum -y install unzip \
  && curl -O http://download.java.net/java/GA/jdk9/9/binaries/openjdk-9_linux-x64_bin.tar.gz \
  && tar xvf openjdk-9_linux-x64_bin.tar.gz -C /usr/lib/jvm/ \
  && yum clean all \
  && rm openjdk-9_linux-x64_bin.tar.gz \
  && rm -rf /var/cache/yum
ENV JAVA_HOME /usr/lib/jvm/jdk-10
ENV PATH "$PATH":/${JAVA_HOME}/bin:.:
