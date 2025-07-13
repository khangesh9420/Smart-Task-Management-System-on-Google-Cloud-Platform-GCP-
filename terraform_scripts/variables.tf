variable "project_id" {
  description = "The Project ID of the google cloud."
  type        = string

}
variable "region" {
  description = "The region to deploy resources in."
  type        = string
  default     = "us-central1"
}
variable "zone" {
  description = "The zone to deploy resources in."
  type        = string
  default     = "us-central1-a"
}
variable "ssh_user" {
  description = "SSH user for the VM instance."
  type        = string
  default     = "user"
}
variable "public_key_path" {
  description = "Path to the public SSH key for the VM instance."
  type        = string
  default     = "~/.ssh/id_rsa.pub"
}
variable "tags" {
  description = "Network tags for the VM instance."
  type        = list(string)
  default     = ["dev-instance"]
  
}