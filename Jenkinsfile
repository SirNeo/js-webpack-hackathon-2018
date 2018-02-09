pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

/* pipeline {
  agent any

  //stage ('Checkout') {
    // echo 'Checkout repository...'
    // Clean workspace before checkout
    // step ([$class: 'WsCleanup'])
    //checkout scm
  //}
  stages {

  stage ('Install') {
    echo 'Install dependencies..'
    env.PATH = "/opt/jenkins/bin:${env.PATH}"
    catchError {
      // Install dependencies
      sh 'npm install'
      // Build assets with eg. webpack 
      //sh 'npm run build'
    }
  }

  stage ('Lint') {
      echo 'Linting...'
      sh 'npm run lint'
  }

  stage ('Build') {
      echo 'Building...'
      sh 'npm run build'
  }

  stage ('Test') {
      echo 'Testing pending...'
  }

  stage ('Build for Production') {
      echo 'Building for production...'
  }

  stage ('Deploy in Production') {
      echo 'Deploying in production...'
  }
/*
  stage ('Test') {
    catchError {
      sh 'npm test'
      // Publish our test and coverage reports
      step([$class: 'JUnitResultArchiver', testResults: 'tests/test-report.xml'])
      step([
        $class: 'CloverPublisher',
        cloverReportDir: 'tests',
        cloverReportFileName: 'coverage-report.xml',
        healthyTarget: [methodCoverage: 67, conditionalCoverage: 75, statementCoverage: 67],
        unhealthyTarget: [methodCoverage: 10, conditionalCoverage: 15, statementCoverage: 10],
        failingTarget: [methodCoverage: 5, conditionalCoverage: 10, statementCoverage: 5]
      ])
    }
  }

  stage ('Deploy') {
    echo "We are currently working on branch: ${env.BRANCH_NAME}"

    switch (env.BRANCH_NAME) {
      case 'master': 
        env.DEPLOYMENT_ENVIRONMENT = 'prod';
        env.PROPERTY_FILE = 'env.prod.properties';
        break;
      case 'develop':
        env.DEPLOYMENT_ENVIRONMENT = 'test';
        env.PROPERTY_FILE = 'env.test.properties';
        break;
      default: env.DEPLOYMENT_ENVIRONMENT = 'no_deploy';
    }

    if (env.DEPLOYMENT_ENVIRONMENT != 'no_deploy') {
      catchError { sh './deploy.sh' }
    }
  }
  
  }
} */