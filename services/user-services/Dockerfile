FROM python:3.11-slim

WORKDIR /app

# Copy app source code
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install PostgreSQL client tools for health checks
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

# Make wait script executable
RUN chmod +x wait-for-postgres.sh

# Entrypoint: wait for DB, then start Gunicorn server
ENTRYPOINT ["./wait-for-postgres.sh"]
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:create_app"]

