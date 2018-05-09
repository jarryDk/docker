FROM jarrydk/wildfly:12.0.0.Final
MAINTAINER Michael Bornholdt Nielsen, jarry.dk

RUN rm ${WILDFLY_HOME}/modules/system/layers/base/org/jboss/jandex/main/jandex-2.0.4.Final.jar \
    && rm ${WILDFLY_HOME}/modules/system/layers/base/org/jboss/jandex/main/module.xml

ADD jandex-2.0.5.Final.jar ${WILDFLY_HOME}/modules/system/layers/base/org/jboss/jandex/main/jandex-2.0.5.Final.jar
ADD module.xml ${WILDFLY_HOME}/modules/system/layers/base/org/jboss/jandex/main/module.xml

# USER root
RUN chown -R serveradmin:serveradmin ${WILDFLY_HOME}/modules/system/layers/base/org/jboss/jandex/main
USER serveradmin
