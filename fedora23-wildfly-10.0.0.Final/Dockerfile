FROM jarry/fedora23-jdk:latest

MAINTAINER Michael Bornholdt Nielsen mni@jarry.dk

##
# Add WildFly 10.0.0.Final
RUN wget http://download.jboss.org/wildfly/10.0.0.Final/wildfly-10.0.0.Final.tar.gz

RUN mkdir -p /opt/wildfly-install
#RUN mkdir -p /opt/wildfly
RUN tar -xvf wildfly-10.0.0.Final.tar.gz -C /opt/wildfly-install
RUN ln -s /opt/wildfly-install/wildfly-10.0.0.Final/ /opt/wildfly 

RUN ls /opt/wildfly 

# Add user
RUN /opt/wildfly/bin/add-user.sh admin passw0rd_ --silent


# and launch
ENTRYPOINT /opt/wildfly/bin/standalone.sh -b=0.0.0.0
EXPOSE 8080 9990
