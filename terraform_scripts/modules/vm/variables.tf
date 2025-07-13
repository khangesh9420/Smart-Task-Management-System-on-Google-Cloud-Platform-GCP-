variable "zone" {
  description = "The zone to deploy resources in."
  type        = string
  default     = "us-central1-a"
  
}
variable "name" {
  description = "The name of the VM instance."
  type        = string
  default     = "dev-instance"
  
}
variable "machine_type" {
  description = "The machine type for the VM instance."
  type        = string
  default     = "e2-medium"
  
}
variable "image" {
  description = "The image to use for the boot disk."
  type        = string
  default     = "debian-cloud/debian-11"
}
variable "tags" {
  description = "Network tags for the VM instance."
  type        = list(string)
  default     = ["dev-instance"]
  
}
variable "ssh_user" {
  description = "SSH user for the VM instance."
  type        = string
  
}

variable "public_key_path" {
  description = "Path to the public SSH key for the VM instance."
  type        = string
  default     = "~/.ssh/id_rsa.pub"
  
}