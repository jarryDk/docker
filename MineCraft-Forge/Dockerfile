FROM fedora:21

MAINTAINER Michael Bornholdt Nielsen mni@jarry.dk

RUN yum install java-1.8.0-openjdk -y

RUN yum install wget -y

RUN yum install unzip -y

RUN java -version

RUN wget https://raw.githubusercontent.com/jarryDk/MineCraft/master/install-and-run-forge-minecraft/install-and-run-forge-minecraft.sh

RUN sh install-and-run-forge-minecraft.sh
