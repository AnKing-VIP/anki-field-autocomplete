#!/usr/bin/env bash
declare DIR="$(cd "$(dirname "$0")/.." && pwd -P)"
set -e

# Typescript
rm -r "$DIR/src/field-autocomplete/web" || true
yarn --cwd "$DIR/ts"
yarn --cwd "$DIR/ts" build 
mv "$DIR/dist/web" "$DIR/src/field-autocomplete" 
rm -r "$DIR/dist"

echo 'Was successfully compiled!'