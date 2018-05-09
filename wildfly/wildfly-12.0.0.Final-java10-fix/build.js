#!/usr/bin/jjs -fv
var cmd = "docker build -t jarrydk/wildfly:12.0.0.Final-java10-fix ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
