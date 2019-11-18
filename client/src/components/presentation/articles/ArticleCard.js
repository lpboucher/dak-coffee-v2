import React from 'react';
import { withRouter } from 'react-router-dom';

import WithHover from '../../utils/WithHover';

import { Box, Image, Text } from 'grommet';

import { buildImageUrl } from '../../utils/Images/generateImage';

const ArticleCard = ({thumb, title, language, slug, history}) => {
    const imageSRC = buildImageUrl(`Articles/Thumbs/${thumb}`);
    return (
        <WithHover height="100%" onClick={() => history.push(`/blog/${slug}`)} isHoverable>
            <Box height="80%">
                <Image fit="cover" src={imageSRC} />
            </Box>
            <Box height="20%" pad={{vertical: 'small'}}>
            <Text textAlign="start" style={{textTransform: 'uppercase'}}>{title[language]}</Text>
            </Box>
        </WithHover>
    );
};

export default withRouter(ArticleCard);