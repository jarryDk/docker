#!/usr/bin/jjs -fv
var cmd = "docker build -t jarrydk/wildfly:13.0.0.Final ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
