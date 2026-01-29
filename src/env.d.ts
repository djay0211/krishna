/// <reference types="vite/client" />

// You can add specific VITE_... environment variables here if you want stricter typing.
// Vite already provides a general ImportMetaEnv via the referenced types.

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
