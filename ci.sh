#!/usr/bin/env bash
set -e
echo "== Running CI script on Unix/macOS =="
npm ci
npm test
