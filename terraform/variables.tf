variable "iam_role_name" {
  description = "IAM role name to attach to instance"
  type        = string
  default     = "circleci-role"
}

variable "image_tag" {
  description = "Docker image tags for envs"
  type        = string
}

variable "access_key" {
  description = "User access key"
  type        = string
}

variable "secret_access_key" {
  description = "Secret access key"
  type        = string
}

variable "key_name" {
  description = "Key name for EC2"
  type        = string
}

variable "ami_id" {
  description = "EC2 AMI ID"
  type        = string
}

variable "eip_alloc_id" {
  description = "Elastic IP allocation ID"
  type        = string
}

locals {
  workspace = local.environments[terraform.workspace]
}