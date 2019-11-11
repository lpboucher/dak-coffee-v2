import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import IconedExplanation from '../utils/IconedExplanation';

import { productSpecsLayout } from '../layouts/globalResponsiveLayout';

import { Grid, Box } from 'grommet';

const ProductSpecs = ({specs, media}) => {
    const layout = productSpecsLayout(media);
    const main = specs.find(spec => spec.isMain === true);
    return (
        <Box pad={layout.pad}>
            <IconedExplanation 
                icon={main.icon}
                description={main.description}
                spacing={{vertical: 'small'}}
                margin={{vertical: "small"}}
                size={"small"}
            />
            <Grid columns={layout.columns} rows={layout.rows}>
            {specs.map(spec => 
                spec.isMain !== true && 
                    <IconedExplanation 
                        icon={spec.icon}
                        description={spec.description}
                        spacing={{vertical: 'small'}}
                        margin="none"
                        size={"small"}
                    />
            )}            
            </Grid>
        </Box>
    );
};

export default withResponsive(ProductSpecs);