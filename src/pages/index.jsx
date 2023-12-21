// components/LanguageRedirect.js

import { useEffect } from "react";
import { useRouter } from "next/router";

const LanguageRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Get the user's browser language
    const userLanguage = navigator.language || navigator.userLanguage;

    // Redirect based on language
    if (userLanguage.startsWith("de")) {
      // Redirect to the German version
      router.push("/de");
    } else {
      // Redirect to the English version (default)
      router.push("/en");
    }
  }, [router]);

  return null; // This component doesn't render anything
};

export default LanguageRedirect;
