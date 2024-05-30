terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket         = "rolewithit-tf-state-bucket"
    key            = "terraform/state/terraform.tfstate"
    region         = "ap-southeast-2"
    dynamodb_table = "terraform-locks"
    encrypt        = true
    assume_role = {
      role_arn     = "arn:aws:iam::637423207610:role/circleci-role"
      session_name = "ci-build"
    }
  }
}

provider "aws" {
  region = "ap-southeast-2"
  access_key = var.access_key
  secret_key = var.secret_access_key
  assume_role {
    role_arn     = "arn:aws:iam::637423207610:role/circleci-role"
    session_name = "ci-build"
  }
}

resource "aws_instance" "rolewithit-instance" {
  ami            = var.ami_id
  instance_type  = local.workspace["instance_type"]
  key_name       = var.key_name
  user_data      = file("../scripts/ec2_docker_setup.sh")

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "rolewithit-${terraform.workspace}"
    Environment = "${terraform.workspace}"
  }
}

data "aws_eip" "existing_eip" {
  id = var.eip_alloc_id
}

resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.rolewithit-instance.id
  allocation_id = data.aws_eip.existing_eip.id
}