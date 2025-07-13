output "name" {
  description = "The name of the VM instance."
  value       = google_compute_instance.dev_instance.name
  
}
output "zone" {
  description = "The zone where the VM instance is deployed."
  value       = google_compute_instance.dev_instance.zone
  
}
output "external_ip" {
  description = "The external IP address of the VM instance."
  value       = google_compute_instance.dev_instance.network_interface[0].access_config[0].nat_ip
  
}