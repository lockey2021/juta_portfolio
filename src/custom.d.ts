// This tells TypeScript to treat .pdf files as modules that export a string (the file path)

declare module '*.pdf' {
    const src: string;
    export default src;
  }

  // src/custom.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_FIREBASE_API_KEY: string;
    REACT_APP_FIREBASE_AUTH_DOMAIN: string;
    REACT_APP_FIREBASE_DATABASE_URL: string;
    REACT_APP_FIREBASE_PROJECT_ID: string;
    REACT_APP_FIREBASE_STORAGE_BUCKET: string;
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: string;
    REACT_APP_FIREBASE_APP_ID: string;
  }
}

  