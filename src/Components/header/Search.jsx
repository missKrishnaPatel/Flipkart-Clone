import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';



const SearchContainer = styled(Box)({
    backgroundColor: "white",
    width: '38%',
    borderRadius  : '2px',
     marginLeft :'10px',
})


const InputSearchBase = styled(InputBase)({
     paddingLeft: '20%',
     width: "100%",
     fontSize:'unset'
})

const SearchIconwrapper = styled(Box)({
     color:"black",
     padding:'5px'
})

const Search= () =>{

    return(
        <SearchContainer  style={{display:"flex"}}>
             <InputSearchBase
             placeholder="search for products, brands and more"/>
             <SearchIconwrapper>
                <SearchIcon />
             </SearchIconwrapper>
        </SearchContainer>
       
    )

}


export default Search;