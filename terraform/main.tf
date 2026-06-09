provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "jenkins" {

  ami           = "ami-xxxxxxxx"
  instance_type = "t3.medium"

  tags = {
    Name = "jenkins-server"
  }
}
