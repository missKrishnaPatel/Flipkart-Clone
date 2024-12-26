import { Box, Button, ButtonGroup, styled } from "@mui/material";


const  Component = styled( ButtonGroup)
`
margin-top:30px;



`


const StyledButton = styled(Button)`
border-radius:50%;
`





const GroupedButton =() =>{
    return {
        <>
              < ButtonGroup>
                  <Button>-</Button>
                  <Button disabled>1</Button>
                  <Button>+</Button>
              </ ButtonGroup>
        </>
    }
}


export default  GroupedButton;