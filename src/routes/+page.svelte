<script module lang="ts">
  import Home from './home/+page.svelte';
  import {initializeApp, type FirebaseOptions} from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
} satisfies FirebaseOptions

initializeApp(firebaseConfig);
</script>

<Home />