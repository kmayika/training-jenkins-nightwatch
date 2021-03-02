/* All Declarative pipeleines must be enclosed within a pipeline block*/
pipeline {
    agent any
    
    tools { nodejs "Node" }
    parameters {
        string(name: 'BUILD_NAME', defaultValue: 'Timed Build', description: 'This is the build name')
        string(name: 'ENVIRONMENT_URL', defaultValue: 'takealot.com', description: 'This is the target environment i.e. master.env')
        string(name: 'GIT_BRANCH', defaultValue: 'master', description: 'The target branch', )
        string(name: 'NW_USERNAME', defaultValue: 'dev+556585@take2.co.za', description: 'The target username', )
        string(name: 'NW_PASSWORD', defaultValue: 'test', description: 'The target password', )
        string(name: 'TEST_TAG', defaultValue:  "critical", description: 'The target test tag', )
        booleanParam(name: 'NOTIFY', defaultValue: false, description: 'Send report to slack')
        choice(name: 'BROWSER', choices: ['chrome', 'firefox', 'safari', 'edge', 'ie'], description: 'the target browser')
        choice(name: 'PLATFORM', choices: ['mobi', 'desktop', 'both'], description: 'the target platform')
        booleanParam(name: 'ALL_BROWSER', defaultValue: false, description: 'Run on all browsers')
        booleanParam(name: 'RETRY', defaultValue: true, description: 'Retry test on failure')

    }

    triggers { 
        cron('H * * * *')
    }
    
    stages {
        stage("Git Checkout") {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: "${params.GIT_BRANCH}"]],
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
                SELENIUM_HOST = "10.0.0.100"
            }
            steps {
                script {
                    // should the test retry?
                    def retry = params.RETRY == true ? '--suiteRetries 2': ''
                    if (params.ALL_BROWSER == true) {
                        sh ("HOME=$WORKSPACE PATH=$PATH:$WORKSPACE/.local/bin ./node_modules/.bin/nightwatch -e chrome,firefox,safari,edge,ie")
                    } else {
                        if (params.PLATFORM == "both") {
                            sh ("HOME=$WORKSPACE PATH=$PATH:$WORKSPACE/.local/bin ./node_modules/.bin/nightwatch -e ${params.BROWSER} --tag ${params.TEST_TAG} ${retry}")
                        } else {
                            sh ("HOME=$WORKSPACE PATH=$PATH:$WORKSPACE/.local/bin ./node_modules/.bin/nightwatch -e ${params.BROWSER} --tag ${params.PLATFORM},${params.TEST_TAG} ${retry}")
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            echo "Test Execution is done closing grid"
            sh ("sudo docker-compose -f selenium/selenium-docker-compose.yml down")
        }
    }
}
