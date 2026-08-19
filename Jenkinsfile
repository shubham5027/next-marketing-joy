pipeline {

    agent {
        label 'app-server'
    }

    environment {
        DOCKER_IMAGE = 'shubham5027/my-node-app'
        CONTAINER_NAME = 'my-node-app'
        APP_PORT = '3000'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    echo "Building Docker image..."

                    docker build \
                        -t ${DOCKER_IMAGE}:${BUILD_NUMBER} \
                        -t ${DOCKER_IMAGE}:latest \
                        .
                '''
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                            -u "$DOCKER_USERNAME" \
                            --password-stdin
                    '''
                }
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                    echo "Pushing Docker image..."

                    docker push ${DOCKER_IMAGE}:${BUILD_NUMBER}
                    docker push ${DOCKER_IMAGE}:latest
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                    echo "Stopping old container..."

                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                '''
            }
        }

        stage('Pull Latest Image') {
            steps {
                sh '''
                    echo "Pulling latest image..."

                    docker pull ${DOCKER_IMAGE}:latest
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                    echo "Starting new container..."

                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${APP_PORT}:${APP_PORT} \
                        ${DOCKER_IMAGE}:latest
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    echo "Checking container..."

                    sleep 10

                    docker ps

                    docker inspect ${CONTAINER_NAME} \
                        --format='{{.State.Status}}'
                '''
            }
        }
    }

    post {

        success {
            echo '======================================'
            echo 'Deployment Successful!'
            echo '======================================'
        }

        failure {
            echo '======================================'
            echo 'Deployment Failed!'
            echo '======================================'
        }
    }
}