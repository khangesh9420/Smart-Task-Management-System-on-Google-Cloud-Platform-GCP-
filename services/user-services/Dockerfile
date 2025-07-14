# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy dependency files
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy app source code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Set environment variables (optional but helpful)
ENV PYTHONUNBUFFERED=1

# Command to run Gunicorn with your WSGI app
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "wsgi:app"]
