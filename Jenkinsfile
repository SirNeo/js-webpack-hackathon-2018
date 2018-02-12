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
                sh 'npm run lint'
            }
        }
        stage('Build') {
            steps {
                echo 'Building....'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage('End') {
          steps {
            echo 'Success!'
          }
        }
    }
}
