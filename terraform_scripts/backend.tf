terraform {
  backend "gcs" {
    bucket  = "stm-terraform-state"
    prefix  = "terraform/state"
    credentials = "C:/Users/khang/AppData/Roaming/gcloud/application_default_credentials.json"
    
  }
}