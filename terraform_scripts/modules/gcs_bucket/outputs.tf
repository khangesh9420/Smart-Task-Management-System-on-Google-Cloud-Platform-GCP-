output "bucket_name" {
  description = "The name of the GCS bucket used for backend storage."
  value       = google_storage_bucket.gcs_bucket.name

}