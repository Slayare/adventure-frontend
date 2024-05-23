variable "access_key" {
  description = "User access key"
  type        = string
}

variable "secret_access_key" {
  description = "Secret access key"
  type        = string
}

variable "role_arn" {
  description = "Role for accessing EC2 instances"
  type        = string
}