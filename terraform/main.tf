import {
  to = aws_instance.rolewithit-test
  id = "i-097dfb31b480b6f4f"
}

import {
  to = aws_instance.rolewithit-main
  id = "i-054729f9e8cad7999"
}

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

resource "aws_instance" "rolewithit-test" {
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
    Name = "rolewithit-test"
    Environment = "Test"
  }
}

resource "aws_instance" "rolewithit-main" {
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
    Name = "rolewithit-main"
    Environment = "Prod"
  }
}