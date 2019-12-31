import React from "react";
import Helmet from "react-helmet";

const SEO = ({title, description, keywords, schema}) => {
    return (
        <Helmet>
            <html lang="en"/>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords ? keywords.join(",") : ''}/>
            <meta name="og:title" content={title}/>
            <meta name="og:description" content={description}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="theme-color" content="#000000"/>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
};

export default SEO;