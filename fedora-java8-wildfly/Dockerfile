# Inspiration
# https://github.com/hpehl/dockerfiles

FROM fedora:20

MAINTAINER Michael Bornholdt Nielsen mni@jarry.dk

RUN yum install wget -y
RUN yum install unzip -y

ADD jdk-8u5-linux-x64.rpm /

#ADD wildfly-8.0.0.Final.zip /
RUN wget http://download.jboss.org/wildfly/8.1.0.CR1/wildfly-8.1.0.CR1.zip

# We need to download java to the same folder as this Dockerfile
RUN rpm -ivh jdk-8u5-linux-x64.rpm

RUN unzip wildfly-8.1.0.CR1.zip
RUN rm wildfly-8.1.0.CR1.zip
RUN ln -s wildfly-8.* wildfly

# Add user
RUN /wildfly/bin/add-user.sh admin passw0rd_ --silent

# Add files
ADD launch.sh /
RUN chmod +x /launch.sh

# and launch
ENTRYPOINT /launch.sh
EXPOSE 8080 9990
