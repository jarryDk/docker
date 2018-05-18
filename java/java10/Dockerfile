FROM centos:7
MAINTAINER Michael Bornholdt Nielsen, jarry.dk
RUN yum update -y \
  && mkdir /usr/lib/jvm/ \
  && yum -y install unzip \
  && curl -O https://download.java.net/java/GA/jdk10/10.0.1/fb4372174a714e6b8c52526dc134031e/10/openjdk-10.0.1_linux-x64_bin.tar.gz \
  && tar xvf openjdk-10.0.1_linux-x64_bin.tar.gz -C /usr/lib/jvm/ \
  && yum clean all \
  && rm openjdk-10.0.1_linux-x64_bin.tar.gz \
  && rm -rf /var/cache/yum
ENV JAVA_HOME /usr/lib/jvm/jdk-10.0.1
ENV PATH "$PATH":/${JAVA_HOME}/bin:.:
