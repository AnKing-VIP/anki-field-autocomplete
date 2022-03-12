#!/usr/bin/env bash
declare DIR="$(cd "$(dirname "$0")/.." && pwd -P)"
set -e

# Typescript
yarn --cwd "$DIR/ts" && yarn --cwd "$DIR/ts" build && rm -r "$DIR/src/field-autocomplete/web" && mv "$DIR/dist/web" "$DIR/src/field-autocomplete" && rm -r "$DIR/dist"


echo 'Was successfully compiled!'
