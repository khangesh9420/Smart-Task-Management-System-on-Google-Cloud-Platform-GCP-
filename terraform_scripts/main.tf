module "gke_cluster" {
  source        = "./modules/gke-cluster"
  project_id    = var.project_id
  region        = var.region
  zone          = var.zone
  cluster_name  = var.cluster_name
  node_count    = var.node_count
  machine_type  = var.machine_type

}
module "artifact-registry" {
  source        = "./modules/artifact-registry"
  project_id    = var.project_id
  location      = var.location 
  repository_name = var.repository_name
}

module "extra_gke_clusters" {
  for_each = var.extra_clusters

  source       = "./modules/gke-cluster"
  project_id   = var.project_id
  region       = each.value.region
  zone         = each.value.zone
  cluster_name = each.value.cluster_name
  node_count   = each.value.node_count
  machine_type = each.value.machine_type
}