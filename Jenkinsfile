node('docker') {
  stage('Checkout') {
    checkout scm
  }

  stage('Test') {
    sauce('saucelabs') {
      sauceconnect(useGeneratedTunnelIdentifier: true, verboseLogging: true) {
        withEnv(['HOME=$WORKSPACE']) {
          docker.image('node:6.6.0').inside {
            sh 'npm install'
            sh 'npm run test'
          }
        }
      }
    }
  }
  stage('Collect Results') {
    step([$class: 'SauceOnDemandTestPublisher'])
  }
}
