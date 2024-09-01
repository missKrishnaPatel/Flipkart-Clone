
//components
import Header from "./Components/header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import {Box} from "@mui/material";

function App() {
 

  return (
    <>
         
      <Header /> 
      <Box  style={{ marginTop: '5px', maxWidth: '100vw', overflow: 'hidden' }}>
        <Home/>
      </Box> 
          
    </>
  )
}

export default App;


