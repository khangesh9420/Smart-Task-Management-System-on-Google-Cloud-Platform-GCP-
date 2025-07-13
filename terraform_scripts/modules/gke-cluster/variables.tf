variable "project_id" {
  description = "The ID of the Google Cloud project to use."
  type        = string      
  
}
variable "region" {
  description = "The region to deploy resources in."
  type        = string
  default     = "africa-south1"
  
}
variable "zone" {
  description = "The zone to deploy resources in."
  type        = string
  default     = "africa-south1-a"
  
}
variable "cluster_name" {
  description = "The name of the GKE cluster."
  type        = string
  default     = "gke-cluster"
  
}
variable "node_count" {
  description = "The number of nodes in the GKE cluster."
  type        = number
  default     = 3
  
}
variable "machine_type" {
  description = "The machine type for the GKE nodes."
  type        = string
  default     = "e2-medium"
  
}