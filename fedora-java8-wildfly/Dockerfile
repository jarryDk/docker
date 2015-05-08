FROM fedora:21

MAINTAINER Michael Bornholdt Nielsen mni@jarry.dk

RUN yum -y update && yum clean all

RUN yum install wget -y
RUN yum install curl -y
RUN yum install unzip -y

curl -L -O -H "Cookie: oraclelicense=accept-securebackup-cookie" -k "https://edelivery.oracle.com/otn-pub/java/jdk/8u45-b14/jdk-8u45-linux-i586.rpm"

RUN wget http://download.jboss.org/wildfly/8.2.0.Final/wildfly-8.2.0.Final.zip

# We need to download java to the same folder as this Dockerfile
RUN rpm -ivh jdk-8u45-linux-i586.rpm

RUN unzip wildfly-8.2.0.Final.zip
RUN rm wildfly-8.2.0.Final.zip
RUN ln -s wildfly-8.* wildfly

# Add user
RUN /wildfly/bin/add-user.sh admin passw0rd_ --silent

# Add files
ADD launch.sh /
RUN chmod +x /launch.sh

# and launch
ENTRYPOINT /launch.sh
EXPOSE 8080 9990
