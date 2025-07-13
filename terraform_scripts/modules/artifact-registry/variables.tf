variable "project_id" {
  description = "The ID of the Google Cloud project to use."
  type        = string
  
}
variable "location" {
    description = "The location for the Artifact Registry repository."
    type        = string
    default     = "us-central1"
}
variable "repository_name" {
    description = "The name of the Artifact Registry repository."
    type        = string
    default     = "stm-repository"
}
