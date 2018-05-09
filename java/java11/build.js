#!/usr/bin/jjs -fv
var cmd = "docker build -t jarrydk/java:11 ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
