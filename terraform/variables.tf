variable "test_ami_id" {
  description = "AMI for test instance"
  type        = string
  default     = "fake-ami-test"
}

variable "prod_ami_id" {
  description = "AMI for prod instance"
  type        = string
  default     = "fake-ami-prod"
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

variable "iam_role_name" {
  description = "IAM role name to attach to instance"
  type        = string
  default     = "read-ec2-service-role"
}

variable "role_arn" {
  description = "Role for accessing EC2 instances"
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