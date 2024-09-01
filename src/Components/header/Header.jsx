import { AppBar, Box, styled, Toolbar,Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import Search from "./Search.jsx";
import CustomButtons from "./CustomButtons.jsx";

const StyleHeader = styled(AppBar)({
  backgroundColor: blue[700],
  height: '55px',
  position: 'static',  // Position the header fixed at the top
  maxWidth:'100vw',
  
});

const Component =styled(Box)({
  
  marginLeft: '12%' , 
  lineHeight: '0',
  display:'flex',
  alignItems:'center',
  overflow:'hidden',
  maxWidth:'88%',
 
})

const SubHeading = styled(Typography)({

  fontSize: '10px',
  fontWeight: 'italic',
});

const PlusImage = styled('img')({
  width: 10,
  height: '10px',
  marginLeft: '4px',
});

const CustomButtonWrapper = styled(Box)({

  margin:'2%',
  overflow:'hidden',

})

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyleHeader>
      <Toolbar style={{minHeight:'55px'}}>
        <Component component="div"  alignItems="center">
          <img src={logoURL} style={{ width: 75 }} alt="Logo" />
          <Box component="span" style={{ display: 'flex', alignItems: 'center' }}>
            
            <SubHeading>Explore&nbsp;
              <Box component="span" style={{ color: '#FFE500' }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="Plus" />
          </Box>
        </Component>
        <Search/>
        <CustomButtonWrapper>
          <CustomButtons/>
        </CustomButtonWrapper>
      </Toolbar>
    </StyleHeader>
  );
}

export default Header;
