 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBoHW87Svon5ASg5QndQ3FkKEgm4FJd6Qg",
   authDomain: "farhan-dev-portfolio.firebaseapp.com",
   projectId: "farhan-dev-portfolio",
   storageBucket: "farhan-dev-portfolio.appspot.com",
   messagingSenderId: "648751036567",
   appId: "1:648751036567:web:4c3521bf36c9789ed8d1d2",
   measurementId: "G-44VJ50WG13"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);