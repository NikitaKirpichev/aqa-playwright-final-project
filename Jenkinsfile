pipeline {
agent any

   stages {
      
    stage('install') {
        agent { docker { image 'mcr.microsoft.com/playwright:v1.28.0-jammy' } }
        steps {     
            sh 'npm install'
        }
    }

    stage('run tests'){
        agent { docker { image 'mcr.microsoft.com/playwright:v1.28.0-jammy' } }
        steps{
            sh 'npx playwright test --project=chromium --workers=1'         
        }
    }

    stage('allure report'){
        agent any
        steps{
            allure includeProperties: false, jdk: '', results: [[path: '**/target/allure-results']]       
        }
    }
   }
}