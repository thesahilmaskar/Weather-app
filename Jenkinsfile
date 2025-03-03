pipeline {
    agent any
    tools {
        maven 'Maven' // Name of the Maven installation in Jenkins
    }
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/your-repo.git' // Replace with your repository URL
                sh 'mvn clean package'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    def pom = readMavenPom file: 'pom.xml'
                    def warFile = "target/${pom.artifactId}-${pom.version}.war"
                    deploy adapters: [tomcat9(credentialsId: 'TomcatCredentials', path: '', url: 'http://your-tomcat-server:8080/')], contextPath: '/', war: warFile
                }
            }
        }
    }
}
