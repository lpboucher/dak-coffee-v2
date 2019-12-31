import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import { schemaBuilder } from '../../utils/SEO/schema';

import SEO from '../../utils/SEO/SEO';

import Hero from '../global/Hero';

import { Box } from 'grommet';

import { buildImageUrl } from '../../utils/Images/generateImage';

const SingleArticle = ({id, main, content, title, language, slug, media}) => {
    const isMobile = !(media === "medium" || media === "large" || media === "infinity");
    const imageSRC = buildImageUrl(`Articles/Headers/${main}`);
    const schema = schemaBuilder(
        'Article',
        `https://dakcoffeeroasters.com/blog/${slug}`,
        title[language],
        imageSRC,
        );
    return (
        <>
            <SEO 
                schema={schema}
            />
            <Hero
                    bgImage={imageSRC}
                    height="90vh"
                    overlay={{
                        text: title[language],
                        loc: "center",
                        height: "25vh"
                    }}
                />
            <Box width="80%" margin={{horizontal: "auto", bottom: "-20vh"}} pad="xlarge" background="lightGrey" style={{transform: "translate(0,-40vh)"}}>
                <div style={{textAlign: isMobile ? 'center' : 'inherit', paddingTop: isMobile ? '20px' : '0'}} dangerouslySetInnerHTML={{__html: content[language]}} />
            </Box>
        </>
    );
};

export default withResponsive(SingleArticle);