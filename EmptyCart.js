import { Box, Button, Typography } from "@mui/material"


const Component = styled(Box)`
height:65vh;
width:80%;
margin:80px 140px;


`


const Container= styled(Box)`

text-align:center;
padding-top:70px;
`;





const EmptyCart = ()=>{

    const imgURL =;
    return 
    {
        < Component>
            <Container>
                <img src={imgURL}  alt="empty" style={{width:'15%'}}/>
                <Typography>
                    Your Cart is empty
                </Typography>
                <Typography>
                    Login to see the items you added previously
                </Typography>
                <Button>Login</Button>
            </Container>
        </ Component>
    }
}

export default EmptyCart;