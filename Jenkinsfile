pipeline {
    agent any
    tools {nodejs "nodejs.8.9.4"}
    stages {
        stage('Init') {
          steps {
            echo "Running ${env.JOB_NAME} #${env.BUILD_ID}"
          }
        }
        stage('Install') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Lint') {
            steps {
                echo 'Linting...'
                sh 'npm run lint:xml && exit 0'
            }
        }
        stage('Build') {
            steps {
                echo 'Building....'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Building....'
                sh 'npm run test:phantom'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'npm run start'
                echo 'Success!'
            }
        }
    }
}
