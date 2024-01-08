var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyD4U6OwKlQ5dQJt23jd8yg3S13nQyf566M",
    authDomain: "happeningsarround.firebaseapp.com",
    projectId: "happeningsarround",
    storageBucket: "happeningsarround.appspot.com",
    messagingSenderId: "323855487253",
    appId: "1:323855487253:web:2d7e79848df5b389b1591c",
    measurementId: "G-6WN2QG091G"
};

firebase.initializeApp(firebaseConfig);

module.exports = {
  auth: firebase.auth(),
  firestore: firebase.firestore()
};


  