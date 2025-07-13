module "VM" {
  source          = "./modules/vm"
  name            = "stm-vm"
  zone            = var.zone
  machine_type    = "e2-medium"
  image           = "debian-cloud/debian-11"
  tags            = var.tags
  ssh_user        = var.ssh_user
  public_key_path = "~/.ssh/id_rsa.pub"
}