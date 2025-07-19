#!/bin/bash
set -e

: "${BUILD_ID:?BUILD_ID is not set}"
BASE_DIR="${1:-.}"

# Read the changed services from the environment variable
IFS=',' read -ra SERVICES <<< "${CHANGED_SERVICES}"

for service in "${SERVICES[@]}"; do
  case "$service" in
    frontend)
      file="$BASE_DIR/frontend/values.yaml"
      ;;
    user-services)
      file="$BASE_DIR/user-services/values.yaml"
      ;;
    project-services)
      file="$BASE_DIR/project-services/values.yaml"
      ;;
    *)
      echo "Unknown service: $service"
      continue
      ;;
  esac

  if [[ -f "$file" ]]; then
    echo "Updating tag in $file to $BUILD_ID"
    sed -i "s/\(tag:\s*\).*/\1$BUILD_ID/" "$file"
  else
    echo "File not found: $file"
  fi
done
