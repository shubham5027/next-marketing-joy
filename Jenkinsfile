pipeline {
    agent {
        label 'app-server'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t :${BUILD_NUMBER} .
                    docker tag market:${BUILD_NUMBER} market:latest
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                    docker stop market || true
                    docker rm market || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                    docker run -d \
                      --name market \
                      -p 3000:3000 \
                      market:latest
                '''
            }
        }

        stage('Verify Application') {
            steps {
                sh '''
                    sleep 10
                    docker ps
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}