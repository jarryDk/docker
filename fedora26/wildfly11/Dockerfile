FROM jarrydk/java

MAINTAINER Michael Bornholdt Nielsen michaelbornholdtnielsen@gmail.com

ENV VERSION 11.0.0.CR1
ENV INSTALL_DIR /opt
ENV WILDFLY_HOME ${INSTALL_DIR}/wildfly-${VERSION}
ENV DEPLOYMENT_DIR ${WILDFLY_HOME}/standalone/deployments/

RUN yum -y update \
	&& yum clean all \
	&& curl -O http://download.jboss.org/wildfly/${VERSION}/wildfly-${VERSION}.tar.gz \
	&& tar -zxvf wildfly-${VERSION}.tar.gz -C ${INSTALL_DIR}

ENTRYPOINT ${WILDFLY_HOME}/bin/standalone.sh -b=0.0.0.0

EXPOSE 8080


