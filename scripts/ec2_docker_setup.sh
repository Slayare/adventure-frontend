#cloud-boothook
#!/bin/bash
LOG_FILE="/var/log/user-data.log"

exec > >(tee -a $LOG_FILE /var/log/cloud-init-output.log) 2>&1

echo "Starting user data script..."

echo "Running yum update..."
sudo yum update -y
echo "Yum update completed with exit code $?"

echo "Installing Docker..."
sudo amazon-linux-extras install docker -y
echo "Docker installation completed with exit code $?"

echo "Starting Docker service..."
sudo service docker start
echo "Docker service start completed with exit code $?"

echo "Adding ec2-user to Docker group..."
sudo usermod -a -G docker ec2-user
echo "Usermod completed with exit code $?"

echo "Pulling Docker image..."
sudo docker pull ${image_tag}
echo "Docker pull completed with exit code $?"

echo "Running Docker container..."
sudo docker run -d --restart unless-stopped -p 80:80 ${image_tag}
echo "Docker run completed with exit code $?"

echo "User data script completed!"
