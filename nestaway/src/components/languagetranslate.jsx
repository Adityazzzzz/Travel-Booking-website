import { useEffect, useState } from "react";

export function GoogleTranslate() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    addScript.async = true;
    document.body.appendChild(addScript);
  
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  
    return () => {
      document.body.removeChild(addScript);
    };
  }, []);
 

  return <div id="google_translate_element" className="translate-box " />;
}
