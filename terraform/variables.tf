variable "ami_id" {
  description = "AMI for instances"
  type        = string
  default     = {
    test = "ami-test"
    prod = "ami-prod"
  }
}

variable "image_tag" {
  description = "Docker image tags for envs"
  type        = string
  default     = {
    test = "test"
    prod = "prod"
  }
}

variable "iam_role_name" {
  description = "IAM role name to attach to instance"
  type        = string
  default     = "circleci-role"
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