/* All Declarative pipeleines must be enclosed within a pipeline block*/
pipeline {
    agent any
    
    tools { nodejs "Node" }
    parameters {
        string(name: 'BUILD_NAME', defaultValue: 'Timed Build', description: 'This is the build name')
        string(name: 'ENVIRONMENT_URL', defaultValue: 'takealot.com', description: 'This is the target environment i.e. master.env')
        booleanParam(name: 'NOTIFY', defaultValue: false, description: 'Send report to slack')
        choice(name: 'BROWSER', choices: ['chrome', 'firefox', 'safari', 'edge', 'ie'], description: 'the target browser')
        booleanParam(name: 'ALL_BROWSER', defaultValue: false, description: 'Run on all browsers')

    }

    triggers { 
        cron('1 * * * *')
    }
    
    stages {
        stage("Git Checkout") {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: 'master']],
                    extensions: [],
                    userRemoteConfigs: [[url: 'https://github.com/kmayika/training-jenkins-nightwatch']]])

            }
        }
        stage('Npm install') {
            steps {
                sh ("HOME=$WORKSPACE PATH=$PATH:$WORKSPACE/.local/bin npm install")
            }
        }
        stage ('Start Selenium Grid') {
            steps {
                sh ("sudo docker-compose -f selenium/selenium-docker-compose.yml up -d")
                sleep 5
            }
        }
        stage ('Set Selenium Host and Run Tests in All browser') {
            environment {
                SELENIUM_HOST = "10.0.0.104"
            }
            steps {
                script {
                    if (params.ALL_BROWSER == true) {
                        sh ("HOME=$WORKSPACE PATH=$PATH:$WORKSPACE/.local/bin ./node_modules/.bin/nightwatch -e chrome,firefox,safari,edge,ie")
                    } else {
                        sh ("HOME=$WORKSPACE PATH=$PATH:$WORKSPACE/.local/bin ./node_modules/.bin/nightwatch -e ${params.BROWSER}")
                    }
                }
            }
        }
    }
    post {
        always {
            echo "Test Execution is done closing grid"
            // sh ("sudo docker-compose -f selenium/selenium-docker-compose.yml down")
        }
    }
}
