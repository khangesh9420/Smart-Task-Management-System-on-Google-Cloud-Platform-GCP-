variable "bucket_name" {
  description = "The name of the GCS bucket to use for the backend."
  type        = string
  default     = "stm-terraform-state"

}
variable "location" {
  description = "The location of the GCS bucket."
  type        = string
  default     = "us-central1"

}
variable "project_id" {
  description = "The Project ID of the Google Cloud project."
  type        = string
  default     = "your-project-id"  # Replace with your actual project ID
  
}