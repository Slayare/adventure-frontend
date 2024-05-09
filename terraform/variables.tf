variable "test_ami_id" {
  description = "AMI for test instance"
  type        = string
}

variable "prod_ami_id" {
  description = "AMI for prod instance"
  type        = string
}

variable "test_image_tag" {
  description = "Docker image tag for test env"
  type        = string
  default     = "test"
}

variable "prod_image_tag" {
  description = "Docker image tag for prod env"
  type        = string
  default     = "prod"
}

variable "key_name" {
  description = "Key name for EC2"
  type        = string
}