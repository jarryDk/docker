FROM fedora:22

MAINTAINER Michael Bornholdt Nielsen mni@jarry.dk

RUN dnf -y update && yum clean all

RUN dnf install wget -y
RUN dnf install curl -y
RUN dnf install unzip -y

#RUN curl -L -O -H "Cookie: oraclelicense=accept-securebackup-cookie" -k "https://edelivery.oracle.com/otn-pub/java/jdk/8u45-b14/jdk-8u45-linux-x64.rpm"

RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u60-b27/jdk-8u60-linux-x64.rpm

RUN wget http://download.jboss.org/wildfly/9.0.0.CR2/wildfly-9.0.0.CR2.zip

# We need to download java to the same folder as this Dockerfile
RUN rpm -ivh jdk-8u45-linux-x64.rpm

RUN unzip wildfly-9.0.0.CR2.zip
RUN rm wildfly-9.0.0.CR2.zip
RUN ln -s wildfly-9.* wildfly

# Add user
RUN /wildfly/bin/add-user.sh admin passw0rd_ --silent

# Add files
## ADD launch.sh /
## RUN chmod +x /launch.sh

# and launch
ENTRYPOINT /wildfly/bin/standalone.sh
EXPOSE 8080 9990
