import React from 'react';
import styled from 'styled-components';
import withResponsive from '../../HOCs/withResponsive';

import { Field } from 'react-final-form';
import { Box, Text } from 'grommet';

import { subscriptionSelectionButtonLayout } from '../../layouts/globalResponsiveLayout';

const SubscriptionButton = styled(Box)`
    border-radius: 10px;
    cursor: pointer;
    background-color: ${({checked}) => checked ? '#343434' : '#dcddde'};
    color: ${({checked}) => checked ? '#f7f8f9' : '#343434'};

    &:hover {
        background-color: ${({checked}) => !checked ? '#a96c35' : '#343434'};
    }
`

const UpperText = styled(Text)`
    text-transform: uppercase;
`

const SubscriptionSelectionButton = ({name, value, label, ...rest}) => {
    const layout = subscriptionSelectionButtonLayout(rest.media);
    return (
        <Field name={name} type="radio" value={value}>
            {({input: {name, value, onChange, checked}}) => (
                <SubscriptionButton 
                    name={name}
                    value={value}
                    checked={checked}
                    onClick={() => onChange(value)}
                    align="center"
                    justify="center"
                    pad="medium"
                    margin={{horizontal: 'small'}}
                    width={rest.width}
                >
                    {Array.isArray(label) ?
                        <>
                            <Text size="mid">{label[0]}</Text>
                            <Text size="large" weight="bold">{label[1]}</Text>
                            <UpperText>{label[2]}</UpperText>
                            <UpperText size="small">{label[3]}</UpperText>
                        </>
                        :
                        <UpperText size={layout.size} weight="bold">{label ? label : value}</UpperText>
                    }
                </SubscriptionButton>
            )}
        </Field>
    );
};

export default withResponsive(SubscriptionSelectionButton);