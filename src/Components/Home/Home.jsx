


import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import {Box,styled} from "@mui/material";



const Component = styled(Box)({
    padding:' 10px',
    background:'grey',
    maxWidth: '100vw', // Added maxWidth to limit growth
  overflow: 'hidden',
})

const Home = () => {

    return(
        <> 
            <Navbar/>
            <Component>
                   <Banner/>
            </Component>
            
        </>
            
      
    )

}

export default Home;