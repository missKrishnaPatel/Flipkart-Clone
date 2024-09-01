
import { Typography, Box, styled } from '@mui/material'; 

import { navData } from '../constants/Data';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    margin: '0px 130px',
    overflow:'hidden',
    maxWidth:'100%',
   
   
}))

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const NavBar = () => {
    return (
        <Component >
            {
                navData.map(temp => (
                    <Container style={{margin :'25px'}}>
                        <img src={temp.url} style={{  width: 64 }} />
                        <Text>{temp.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
}

export default NavBar;