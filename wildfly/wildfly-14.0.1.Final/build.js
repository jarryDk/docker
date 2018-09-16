#!/usr/bin/jjs -fv
var cmd = "docker build -t jarrydk/wildfly:14.0.1.Final ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
