
import { useState } from 'react';

import { Box, Button, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';


//components
import LoginDialog from '../login/LoginDialog';



const Wrapper = styled(Box)`
  display: flex;
  margin: 0 10% 0 auto;
  overflow:hidden;

  & > button,
  & > p,
  & > div {
    margin-right: 50px,
    font-size: 16px,
    alignItems: center
  }
`;

const Container =styled(Box)({
    display:'flex'
})

const LoginButton = styled(Button)({
color:'blue',
background :'white',
textTransform: 'none',
padding: '4px 40px',
borderRadius: '3px',
borderShadow: 'none',
fontWeight: '600px',
height: '32px',
marginTop:'2.5%'


})



const CustomButtons = () => {


   const [open, setOpen] = useState(false);

   const openDialog = ()=>{
     setOpen(true);
   }

  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={()=>openDialog()} >Login</LoginButton>
      <Typography style={{marginTop:'3', width:'135', marginLeft:'15%'}} >Become a Seller</Typography>
      <Typography style={{marginTop:'3', width:'135' , marginLeft:'15%'}}>More</Typography>
      <Container style={{marginTop:'3', width:'135', marginLeft:'15%'}}>
        <ShoppingCart />
        <Typography >Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  );
};

export default CustomButtons;
