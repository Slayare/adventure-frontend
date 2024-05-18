#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo docker pull ${var.image_tag}
sudo docker run -d --restart unless-stopped -p 80:80 ${var.image_tag}
