FROM python:3.11-slim

WORKDIR /app

# Copy all files including the wait script
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Add PostgreSQL client tools (for pg_isready)
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

# Make wait script executable
RUN chmod +x wait-for-postgres.sh

# Entrypoint: wait for DB, then run the app
ENTRYPOINT ["./wait-for-postgres.sh"]
CMD ["python3", "run.py"]
