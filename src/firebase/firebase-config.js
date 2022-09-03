export const firebaseConfig = {
  apiKey: "AIzaSyAXbaJtypRWBbeLJVf9kEM3s3gCggWvYZQ",
  authDomain: "carbuy1617.firebaseapp.com",
  projectId: "carbuy1617",
  storageBucket: "carbuy1617.appspot.com",
  messagingSenderId: "780519040828",
  appId: "1:780519040828:web:00e3e58a34bdf48e2b6039"
};
export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'https://carbuyshop1617.vercel.app/'
      : 'linkDeProducción',
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'https://carbuyshop1617.vercel.app/login'
      : 'linkDeProducción',
};
