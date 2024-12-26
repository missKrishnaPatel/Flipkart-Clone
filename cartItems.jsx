
import { Box,Typography,styled } from "@mui/material";
import { addEllipsis } from "../../Utils/common-utils";
import  GroupedButton from "@mui/material";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
border-top : 1px solid #f0f0f0;
display: flex;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display:flex;
  flex-direction:column;
`;


const smallText = styled(Typography)`
 color:#878787;
 font-size:16px;
 margin-top:10px;
`
const Remove = styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
font-weight:600;
`


const cartItem = () =>{

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

     const dispatch = useDispatch();

      const removeItemFromCart = (id) =>{
        dispatchEvent(removeFromCart(id))
      }

    return {
        <>
       <Component>
          <LeftComponent >
              <img src={item.url} alt="product" style={{height:110, width:110}}/>
              < GroupedButton/>

          </LeftComponent >
          <Box style={{margin:'20px'}}>
              <Typography >{addEllipsis(item.title.longTitle)}
                     
              </Typography>
              <smallText>
                    Seller:RetailNet 
                   <Box component='span'><img src={fassured} alt="flipkart" style={{width:'50px'}}/></Box>
      </smallText>
      <Typography  style={{margin:'28px 0'}}>
            <Box component='span' style={{fontSize:18}}>{item.price.cost}</Box>&nbsp;&nbps;&nbps;
           <Box component='span' style={{color:'#878787'}}><Strike>Rs.{item.price.mrp}</Strike></Box>&nbps;&nbps;&nbps;
           <Box component='span'style={{color:'#388E3C'}}>{item.price.discount}off</Box>
      </Typography>
      <Button onClick={()=> removeItemFromCart(item.id)}>Remove</Button>

          </Box>
       </Component>
       </>
    }
}

export default cartItem;