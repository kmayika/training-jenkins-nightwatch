pipeline {
    stages {
        /* Cloning the git branch*/
        stage('Clone repository') {
                checkout scm
        }
        /* Start docker-compose with five instances of Chrome */
        stage('Start docker-compose') {	
            sh 'docker-compose up -d'
        }
            
        // /* This builds an image with all pytest selenium scripts in it */
        // stage('Build image') {
        // 		def dockerfile = 'pytest.Dockerfile'
        //         app = docker.build("pytest-with-src","-f ${dockerfile} ./")
        // }
            
        /* Execute the pytest script. Even on faliure proceed to next step */
        stage('Execute script') {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh './node_modules/.bin/nightwatch'
                }
        }
            
        /* Delete the image which got created earlier */
        stage('Remove image') {
                sh 'docker rmi pytest-with-src -f'
        }
        
        
        /* Tear down docker compose */
        stage('Teardown docker-compose') {
                sh 'docker-compose down'
        }
        
        
        // /* Generate Allure Report */
        // stage('Allure Report') {
        //         allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        // }


    }

}
