resource "google_compute_network" "gke_cluster_network" {
  name                    = "${var.cluster_name}-network"
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "gke_cluster_subnetwork" {
  name          = "${var.cluster_name}-subnetwork"
  region        = var.region
  network       = google_compute_network.gke_cluster_network.id
  ip_cidr_range = "10.0.0.0/16"
}

resource "google_container_cluster" "gke_cluster" {
  name     = var.cluster_name
  location = var.zone

  network    = google_compute_network.gke_cluster_network.name
  subnetwork = google_compute_subnetwork.gke_cluster_subnetwork.name

  remove_default_node_pool = true
  initial_node_count       = 1
  deletion_protection = false

  ip_allocation_policy {}
}

resource "google_container_node_pool" "gke_node_pool" {
  name       = "${var.cluster_name}-node-pool"
  location   = var.zone
  cluster    = google_container_cluster.gke_cluster.name
  node_count = var.node_count

  node_config {
    machine_type = var.machine_type
    oauth_scopes = ["https://www.googleapis.com/auth/cloud-platform"]
  }
}
