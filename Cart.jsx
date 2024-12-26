import { Typography,Grid,Box,styled, Button } from "@mui/material";
import { useSelector } from "react-redux";


import { payUsingPaytm } from "../../service/api.js";

import { post } from "../../Utils/Paytm.js";


//components

import cartItem from "./cartItems";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)(({theme})=>({
padding:' 30px 135px',
[theme.breakpoints.down('sm')]:{
    
}
}))

const Header = styled(Box)`
padding: 15px 24px;
`

const ButtonWrapper = styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top: 1px solid #f0f0f0;
`

const StyledButton = styled(Button)`
display:flex;
margin-left: auto;
background : #fb641b;
color:#fff;
width:250px;
height:150px;
border-radius:2px;
`

const LeftComponent = styled(Grid)(({ theme })=>({
paddingRight:'14px',

[theme.breakpoints.down('sm')]:{
    marginBottom:'15px',

}

}))


const Cart = () => {
   const { cartItems } = useSelector(state => state.cart);

   const buyNow = () =>{
    let response =   payUsingPaytm({amount:500, Email:'code@1123'});
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response, 
    }
    post(information);


  }


    return (
       <>
         {
            cartItems.length ? 
            <Container container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography>My Cart ({cartItems.length})</Typography>
                    </Header>
                    {
                        cartItems.map(item =>{
                               <cartItem item={item}/>
                        })
                    }
                </LeftComponent>
                <ButtonWrapper>
                    < StyledButton onClick={()=>buyNow()}>Place Order</ StyledButton>
                </ButtonWrapper>
                <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
                <TotalView cartItems={cartItems}/>
            </Container>
            :
          <EmptyCart/>
         }
       </>
    )
}


export default Cart;