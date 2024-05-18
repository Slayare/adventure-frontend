#!/bin/bash
echo "Starting user data script..."
sudo yum update -y
if [ $? -eq 0 ]; then
    echo "Yum update completed successfully!"
else
    echo "Yum update failed."
    exit 1
fi

sudo amazon-linux-extras install docker
if [ $? -eq 0 ]; then
    echo "Docker installed successfully!"
else
    echo "Docker install failed."
    exit 1
fi

sudo service docker start
if [ $? -eq 0 ]; then
    echo "Docker service started successfully!"
else
    echo "Failed to start Docker service."
    exit 1
fi

sudo usermod -a -G docker ec2-user
if [ $? -eq 0 ]; then
    echo "Added ec2-user to the Docker group successfully!"
else
    echo "Failed to add ec2-user to the Docker group."
    exit 1
fi

sudo docker pull ${var.image_tag}
if [ $? -eq 0 ]; then
    echo "Docker image pulled successfully!"
else
    echo "Failed to pull Docker image."
    exit 1
fi

sudo docker run -d --restart unless-stopped -p 80:80 ${var.image_tag}
if [ $? -eq 0 ]; then
    echo "Docker container started successfully!"
else
    echo "Failed to start Docker container."
    exit 1
fi

echo "User data script completed!"
