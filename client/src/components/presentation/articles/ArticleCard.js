import React from 'react';
import { withRouter } from 'react-router-dom';

import WithHover from '../../utils/WithHover';

import { Box, Text } from 'grommet';
import CloudImage from '../../utils/CloudImage';

const ArticleCard = ({thumb, title, language, slug, history}) => {
    return (
        <WithHover height="100%" onClick={() => history.push(`/blog/${slug}`)} isHoverable>
            <Box height="80%">
                <CloudImage img={`Articles/Thumbs/${thumb}`} maxWidth={720}/>
            </Box>
            <Box height="20%" pad={{vertical: 'small'}}>
            <Text textAlign="start" style={{textTransform: 'uppercase'}}>{title[language]}</Text>
            </Box>
        </WithHover>
    );
};

export default withRouter(ArticleCard);
