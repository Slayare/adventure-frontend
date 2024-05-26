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
    role_arn     = "arn:aws:iam::637423207610:role/circleci-role"
    session_name = "ci-build"
  }
}

data "aws_s3_bucket" "tf_state" {
  bucket = "rolewithit-tf-state-bucket"
}

resource "aws_s3_bucket_ownership_controls" "s3_ctrl" {
  bucket = data.aws_s3_bucket.tf_state.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "s3_acl" {
  depends_on = [aws_s3_bucket_ownership_controls.s3_ctrl]

  bucket = data.aws_s3_bucket.tf_state.id
  acl    = "private"
}

data "aws_dynamodb_table" "terraform_locks" {
  name           = "terraform-locks"

  tags = {
    Name = "rolewithit-${terraform.workspace}"
    Environment = "${terraform.workspace}"
  }
}