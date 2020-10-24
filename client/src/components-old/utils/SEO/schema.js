export const schemaBuilder = (type, url, name, image, currency, price, hasStock, slug) => {
    const dt = new Date();
    const endOfYear = new Date(dt.getYear() + 1900, 11, 31);
    let extensionToBase = {};
    if (type === 'Product') {
        extensionToBase = {
            "name": `${name}`,
            "image": `${image}`,
            "offers": {
                "@type": "Offer",
                "priceCurrency": `${currency}`,
                "price": `${price}`,
                "priceValidUntil": `${endOfYear.toISOString()}`,
                "availability": `http://schema.org/${hasStock ? 'InStock': 'OutOfStock'}`
            },
            "brand": {
                "@type": "Organization",
                "name": "Dak Coffee Roasters",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://dakcoffeeroasters.com/FaviconDak.png",
                    "width": 131,
                    "height": 131
                }
            },
            "url": `${url}`,
            "sku": `${slug}`
        }
    } else if (type === 'Article') {
        extensionToBase = {
            "name": `${name}`,
            "image": `${image}`,
        }
    }
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
        },
    }
    return {
        ...baseSchema,
        ...extensionToBase
    } 
};