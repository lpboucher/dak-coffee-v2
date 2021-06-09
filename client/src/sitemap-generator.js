require("babel-register")({
    presets: ["es2015", "react"]
  });

  const axios = require("axios");
  const router = require("./sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;

  async function generateSitemap() {
    try {
        const res1 = await axios.get("https://dakcoffeeroasters.com/api/products/all?isActive=true");
        const products = res1.data.products;

        //const res2 = await axios.get("https://dakcoffeeroasters.com/api/articles");
        //const articles = res2.data;

        let productMap = [];
        //let articleMap = [];

        for(var i = 0; i < products.length; i++) {
            productMap.push({ model: products[i].type, slug: products[i].slug });
        }

        /*for(var i = 0; i < articles.length; i++) {
            articleMap.push({ slug: articles[i].slug });
        }*/

        const paramsConfig = {
            "/shop/:model/:slug": productMap,
            //"/blog/:slug": articleMap,
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
