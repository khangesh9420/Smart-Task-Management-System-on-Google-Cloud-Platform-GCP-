#!/bin/sh

echo "⏳ Waiting for PostgreSQL to be ready..."

until pg_isready -h postgres -p 5432 > /dev/null 2>&1; do
  echo "🕐 Postgres is unavailable - sleeping"
  sleep 2
done

echo "✅ Postgres is up - starting the app"
exec "$@"
