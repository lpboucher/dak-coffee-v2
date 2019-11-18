import React from 'react';
import { withRouter } from 'react-router-dom';

import { Box, Heading, Button, Text } from 'grommet';

const PromoContent = ({close, history}) => {
    return (
        <Box height={"100%"} fill={"horizontal"} pad={"medium"} justify={"around"} background={"#ece7e3"}>
            <Heading level={1} size={'large'} textAlign={'center'}>November Promotion</Heading>
            <Text>Get a free 250g bag of our Rutabo filter coffee when ordering more than 30EUR.</Text>
            <Button primary onClick={()=>{close(); history.push('/shop/rutabo-coffee')}}label={"SHOP NOW"} alignSelf={"center"} style={{color: 'white'}}/>
            <Text>Promotion valid until 30th November 2019.</Text>
        </Box>
    );
};

export default withRouter(PromoContent);