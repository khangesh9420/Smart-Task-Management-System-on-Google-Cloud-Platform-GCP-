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