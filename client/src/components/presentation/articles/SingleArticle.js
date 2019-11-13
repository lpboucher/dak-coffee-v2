import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import Hero from '../global/Hero';

import { Box } from 'grommet';

import { buildImageUrl } from '../../utils/Images/generateImage';

const SingleArticle = ({id, thumb, content, title, language, media}) => {
    const isMobile = !(media === "medium" || media === "large" || media === "infinity");
    console.log(title[language])
    const imageSRC = buildImageUrl(`Articles/Thumbs/${thumb}`);
    return (
        <>
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