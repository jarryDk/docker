FROM jarry/fedora23-jdk:latest

MAINTAINER Michael Bornholdt Nielsen mni@jarry.dk

# Add our user and group first to make sure their IDs get assigned consistently, regardless of whatever dependencies get added
RUN groupadd -r logstash && useradd -r -g logstash logstash

##
# Add Logstash
RUN wget https://download.elastic.co/logstash/logstash/logstash-2.2.2.tar.gz
RUN mkdir -p /opt/logstash && chown -R logstash:logstash /opt/logstash
RUN tar -xvf logstash-2.2.2.tar.gz -C /opt/logstash

# Add files
ADD logstash-simple.conf /opt/logstash/

CMD ["/opt/logstash/logstash-2.2.2/bin/logstash","agent","-f", "/opt/logstash/logstash-simple.conf","-v"]
