import { useEffect } from "react";

export const useTebi = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://live.tebi.co/ecom/widget-manager.js";
    script.id = "tebi";
    script.setAttribute("data-widget-token","744633_d8d0c88e57d7fb12ba0131a188859c827010c42fb8cd07238b3f35c962a4898f");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);    
};
