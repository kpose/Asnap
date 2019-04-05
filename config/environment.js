var environments = {  
    staging: {
      FIREBASE_API_KEY: 'AIzaSyDblqpWB1Ume-I_jn4RwR0Dk0jzaW6PADQ',
      FIREBASE_AUTH_DOMAIN: 'asnap-f9095.firebaseapp.com',
      FIREBASE_DATABASE_URL: 'https://asnap-f9095.firebaseio.com',
      FIREBASE_PROJECT_ID: 'asnap-f9095',
      FIREBASE_STORAGE_BUCKET: 'asnap-f9095.appspot.com',
      FIREBASE_MESSAGING_SENDER_ID: '976046144054',
      GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyBKgJvEgKRGJb8vvJ6zVJoBy6RUIlTp8PM'
    },
    production: {
      // app not secure for appstore 
    }
  };
  
  function getReleaseChannel() {  
    let releaseChannel = Expo.Constants.manifest.releaseChannel;
    if (releaseChannel === undefined) {
      return 'staging';
    } else if (releaseChannel === 'staging') {
      return 'staging';
    } else {
      return 'staging';
    }
  }
  function getEnvironment(env) {  
    console.log('Release Channel: ', getReleaseChannel());
    return environments[env];
  }
  var Environment = getEnvironment(getReleaseChannel());  
  export default Environment;