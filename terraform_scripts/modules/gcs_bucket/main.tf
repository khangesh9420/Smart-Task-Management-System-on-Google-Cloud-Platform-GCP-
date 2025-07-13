resource "google_storage_bucket" "gcs_bucket" {
  name          = var.bucket_name
  location      = var.location
  project       = var.project_id
  force_destroy = true

  uniform_bucket_level_access = true

  versioning {
    enabled = true
  }
  lifecycle {
    prevent_destroy = true
  }
  lifecycle_rule {
    action {
      type = "Delete"
    }
    condition {
      age = 90
    }
  }

}