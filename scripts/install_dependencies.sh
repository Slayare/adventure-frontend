#!/bin/bash
set -e

if [ -d "node_modules" ]; then
  echo "Removing existing node_modules directory..."
  rm -rf node_modules
fi

echo "Installing dependencies..."
npm install

echo "Dependencies installed successfully!"
