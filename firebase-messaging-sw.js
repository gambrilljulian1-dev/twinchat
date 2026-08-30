importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB-A2OZTgE__xkowZalDL9Dm8-TIy5DjjU",
  authDomain: "twinchat-e77f1.firebaseapp.com",
  projectId: "twinchat-e77f1",
  storageBucket: "twinchat-e77f1.firebasestorage.app",
  messagingSenderId: "739355722602",
  appId: "1:739355722602:web:a77a2d1638459ee0e8db13"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title =
    payload.notification?.title || "TwinChat";

  const options = {
    body:
      payload.notification?.body ||
      "You have a new message.",
    icon: "/apple-touch-icon.png",
    badge: "/apple-touch-icon.png"
  };

  self.registration.showNotification(
    title,
    options
  );
});
