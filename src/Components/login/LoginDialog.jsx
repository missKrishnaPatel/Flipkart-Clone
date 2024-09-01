import { Dialog , Box , TextField, Button, Typography, styled} from "@mui/material";




const Image = styled(Box)({
        background:"#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)",
        height:"100%",
        width:'49%'

})


const Component = styled(Box)({

    height:' 70vh',
    width: '90vh'


})



const LoginDialog = ({open, setOpen})=>{


    const handleClose =() =>{
    setOpen(false);
}

    return(
       <Dialog open={open} onClose={handleClose} >
            <Component>
                <Box style={{display:'flex',height:'100%'}}>
                <Image></Image>
                <Box>
                   <TextField label="Enter Email/Mob No." variant="standard"/>
                   <TextField label="Enter Password" variant="standard"/>
                   <TextField>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</TextField>
                   <Button>Login</Button>
                   <Typography>OR</Typography>
                   <Button>Request OTP</Button>
                   <Typography>New to Flipkart? Create an account</Typography>
                </Box>
                </Box>
            </Component>
       </Dialog>
    )
}


export default LoginDialog;     