terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-southeast-2"
  access_key = var.access_key
  secret_key = var.secret_access_key
  assume_role {
    role_arn     = var.role_arn
    session_name = "ci-build"
  }
}

import {
  to = aws_instance.rolewithit-instance
  id = var.ec2_instance_id
}

resource "aws_instance" "rolewithit-instance" {
  ami            = var.ami_id
  instance_type  = local.workspace["instance_type"]
  key_name       = var.key_name

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo amazon-linux-extras install docker
              sudo service docker start
              sudo usermod -a -G docker ec2-user
              sudo docker pull ${var.image_tag}
              sudo docker run -d --restart unless-stopped -p 80:80 ${var.image_tag}
              EOF
  tags = {
    Name = "rolewithit-${terraform.workspace}"
  }
}