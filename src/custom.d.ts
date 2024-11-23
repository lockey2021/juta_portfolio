// This tells TypeScript to treat .pdf files as modules that export a string (the file path)

declare module '*.pdf' {
    const src: string;
    export default src;
  }
  