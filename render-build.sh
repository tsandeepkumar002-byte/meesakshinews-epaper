#!/usr/bin/env bash
set -e
echo "Installing dependencies"
npm ci
echo "Building app"
npm run build
echo "Build finished"
