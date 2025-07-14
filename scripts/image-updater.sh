#!/bin/bash
set -e

: "${BUILD_ID:?BUILD_ID is not set}"
BASE_DIR="${1:-.}"

FILES=(
  "$BASE_DIR/frontend/values.yaml"
  "$BASE_DIR/user-services/values.yaml"
  "$BASE_DIR/project-services/values.yaml"
)

for file in "${FILES[@]}"; do
  if [[ -f "$file" ]]; then
    echo "Updating tag in $file to $BUILD_ID"
    sed -i "s/\(tag:\s*\).*/\1$BUILD_ID/" "$file"
  else
    echo "File not found: $file"
  fi
done