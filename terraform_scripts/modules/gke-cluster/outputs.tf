output "cluster_name" {
  description = "The name of the GKE cluster."
  value       = google_container_cluster.gke_cluster.name
  
}
output "zone" {
  description = "The zone where the GKE cluster is deployed."
  value       = google_container_cluster.gke_cluster.location
  
}
output "endpoint" {
  description = "The endpoint of the GKE cluster."
  value       = google_container_cluster.gke_cluster.endpoint
  
}
