@echo off
echo == Running CI script on Windows ==
call npm ci
call npm test
