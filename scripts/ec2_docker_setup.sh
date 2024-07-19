#cloud-boothook
#!/bin/bash
LOG_FILE="/var/log/user-data.log"

exec > >(tee -a $LOG_FILE /var/log/cloud-init-output.log) 2>&1

echo "Starting user data script..."

echo "Running yum update..."
sudo yum update -y
echo "Yum update completed with exit code $?"

echo "Installing Docker..."
sudo yum install docker -y
echo "Docker installation completed with exit code $?"

sleep 10

echo "Enable Docker service..."
sudo systemctl enable docker.service
echo "Docker enable status completed with exit code $?"

# echo "Checking for running Docker jobs..."
# sudo systemctl list-unit-files
# sudo systemctl status docker.service
# sudo systemctl status docker.socket
# echo "Running job check complete with exit code $?"


echo "Force start Docker service..."
sudo systemctl start docker.service
echo "Docker service force ended with exit code $?"

echo "Pulling Docker image..."
sudo docker pull ${image_tag}
echo "Docker pull completed with exit code $?"

echo "Running Docker container..."
sudo docker run -d --restart unless-stopped -p 80:80 ${image_tag}
echo "Docker run completed with exit code $?"

echo "User data script completed!"
