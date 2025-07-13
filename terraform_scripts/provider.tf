provider "google" {
   credentials = file("C:/Users/khang/AppData/Roaming/gcloud/application_default_credentials.json")
  project = var.project_id
  region  = var.region
  zone    = var.zone

}