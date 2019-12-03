export const schemaBuilder = (type, url, name, image, currency, price) => {
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": `${type}`,
        "url": `${url}`,
        "publisher": {
            "@type": "Organization",
            "name": "Dak Coffee Roasters",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dakcoffeeroasters.com/FaviconDak.png",
                "width": 131,
                "height": 131
            }
        }
    }
    return type === 'Product' ? 
    {
        ...baseSchema,
        "name": `${name}`,
        "image": `${image}`,
        "offers": {
            "@type": "Offer",
            "priceCurrency": `${currency}`,
            "price": `${price}`,
        }
    } 
    :
    baseSchema;
};