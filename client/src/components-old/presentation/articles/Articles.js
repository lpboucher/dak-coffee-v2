import React from 'react';

import ArticleContainer from '../../containers/articles/ArticleContainer';

import VariableGrid from '../../layouts/BlogGridLayout';

import { Box } from 'grommet';

const Articles = ({articles}) => {
    return (
        <Box pad={{bottom: '40px', top: "200px"}} margin={{horizontal: 'large'}} wrap>
            <VariableGrid>
                {articles.map(id =>
                    <ArticleContainer key={id} articleId={id} />
                )}
            </VariableGrid>
        </Box>
    );
};

export default Articles;