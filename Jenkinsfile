pipeline {

    agent any

    environment {
        IMAGE = "dockerhub-user/employee-app"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/user/devops-project.git'
            }
        }

        stage('Backend Build') {
            steps {
                sh 'docker build -t $IMAGE-backend ./backend'
            }
        }

        stage('Frontend Build') {
            steps {
                sh 'docker build -t $IMAGE-frontend ./frontend'
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push $IMAGE-backend'
                sh 'docker push $IMAGE-frontend'
            }
        }

        stage('Deploy') {
            steps {
                sh 'kubectl apply -f kubernetes/'
            }
        }
    }
}
