resource "google_compute_instance" "dev_instance" {
    name         = var.name
    machine_type = var.machine_type
    zone         = var.zone
    
    boot_disk {
        initialize_params {
        image = var.image
        size = 10
        }
    }
    
    network_interface {
        network = "default"
        access_config {
        // Ephemeral IP
        }
    }
    
    metadata = {
        ssh-keys = "${var.ssh_user}:${file(var.public_key_path)}"
    }
    
    tags = var.tags
    
    service_account {
        email  = "default"
        scopes = ["cloud-platform"]
    }
  
}