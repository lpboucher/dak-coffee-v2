import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import Hero from '../global/Hero';

import { Box } from 'grommet';

const term = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1568641352/Heros/Header_Privacy_n8p3yt.jpg';
const privacy = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565896327/Heros/HeaderV2_gujmqi.jpg';

const SingleTerm = ({id, content, title, slug, media}) => {
    const isMobile = !(media === "medium" || media === "large" || media === "infinity");
    const imageSRC = slug === 'privacy-policy' ? privacy : term;
    return (
        <>
            <Hero
                    bgImage={imageSRC}
                    height="90vh"
                    overlay={{
                        text: title,
                        loc: "center",
                        height: "25vh"
                    }}
                />
            <Box width="80%" margin={{horizontal: "auto", bottom: "-20vh"}} pad="xlarge" background="lightGrey" style={{transform: "translate(0,-40vh)"}}>
                <div style={{textAlign: isMobile ? 'center' : 'inherit', paddingTop: isMobile ? '20px' : '0'}} dangerouslySetInnerHTML={{__html: content}} />
            </Box>
        </>
    );
};

export default withResponsive(SingleTerm);