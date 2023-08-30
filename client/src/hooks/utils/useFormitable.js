import { useEffect } from "react";

export const useFormitable = () => {
  useEffect(() => {
    const script = document.createElement('script');

    const scriptString = `
      (function(d, s, id, h) {
          var ftjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          var js = d.createElement(s);
          js.id = id;
          js.src = 'https://cdn.formitable.com/sdk/v1/ft.sdk.min.js';
          h && (js.onload = h);
          ftjs.parentNode.insertBefore(js, ftjs);
      }(document, 'script', 'formitable-sdk', function() {
          FT.load('Analytics');
      }));
    `;
    const scriptText = document.createTextNode(scriptString);
    script.appendChild(scriptText);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
};
