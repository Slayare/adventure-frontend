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
    session_name = "session-name"
  }
}

resource "aws_instance" "test_app_server" {
  ami            = var.test_ami_id
  instance_type  = "t2.micro"
  key_name       = var.key_name

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo amazon-linux-extras install docker
              sudo service docker start
              sudo usermod -a -G docker ec2-user
              sudo docker pull ${var.test_image_tag}
              sudo docker run -d --restart unless-stopped -p 80:80 ${var.test_image_tag}
              EOF

  tags = {
    Name = "Test Application Server"
    Environment = "Test"
  }
}

resource "aws_instance" "prod_app_server" {
  ami            = var.prod_ami_id
  instance_type  = "t2.micro"
  key_name       = var.key_name

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo amazon-linux-extras install docker
              sudo service docker start
              sudo usermod -a -G docker ec2-user
              sudo docker pull ${var.prod_image_tag}
              sudo docker run -d --restart unless-stopped -p 80:80 ${var.prod_image_tag}
              EOF

  tags = {
    Name = "Production Application Server"
    Environment = "Production"
  }
}