FROM jarrydk/java:jdk9

MAINTAINER Michael Bornholdt Nielsen michaelbornholdtnielsen@gmail.com

ENV VERSION 11.0.0.CR1
ENV INSTALL_DIR /
ENV WILDFLY_HOME ${INSTALL_DIR}/wildfly-${VERSION}
ENV DEPLOYMENT_DIR ${WILDFLY_HOME}/standalone/deployments/

RUN yum -y update \
	&& yum clean all \
	&& curl -O http://download.jboss.org/wildfly/${VERSION}/wildfly-${VERSION}.tar.gz \
	&& tar -zxvf wildfly-${VERSION}.tar.gz -C ${INSTALL_DIR} \
	&& chmod a+x ${WILDFLY_HOME}/bin/standalone.sh

ENTRYPOINT ${WILDFLY_HOME}/bin/standalone.sh -b=0.0.0.0

EXPOSE 8080 8443 9990
