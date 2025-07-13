resource "google_artifact_registry_repository" "stm_repository" {
  repository_id = var.repository_name
  location = var.location
  format   = "DOCKER"
  project  = var.project_id

  description = "Artifact Registry repository for Smart Task Management System"

  labels = {
    environment = "development"
    team        = "devops"
  }

  lifecycle {
    prevent_destroy = true
  }
  
}