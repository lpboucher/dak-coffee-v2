require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const axios = require("axios");
  const router = require("./sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  async function generateSitemap() {
    try {
        const res1 = await axios.get("https://dakcoffeeroasters.com/products");
        const products = res1.data;

        const res2 = await axios.get("https://dakcoffeeroasters.com/articles");
        const articles = res2.data;
        
        let productMap = [];
        let articleMap = [];
    
        for(var i = 0; i < products.length; i++) {
            productMap.push({ slug: products[i].slug });
        }

        for(var i = 0; i < articles.length; i++) {
            articleMap.push({ slug: articles[i].slug });
        }

        const paramsConfig = {
            "/shop/:slug": productMap,
            "/blog/:slug": articleMap,
        };

        return (
          new Sitemap(router)
              .applyParams(paramsConfig)
              .build("https://www.dakcoffeeroasters.com")
              .save("./public/sitemap.xml")
        );
    } catch (e) {
        console.log(e)
    }
    
    
  }
  
  generateSitemap();