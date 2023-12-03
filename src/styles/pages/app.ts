import { styled } from "..";

export const Container = styled("div",{
    display:'flex',
    flexDirection:"column",
    alignItems:"flex-start",
   
    justifyContent:"center"
})

export const Header = styled('header',{
    padding:'2rem',

    width:'100%',
    maxWidth:"1180px",

    margin:"0 auto",
    marginBottom:'2rem',

    display:'flex',
    justifyContent:"space-between",  
    alignItems:'center',

    img:{
        cursor:'pointer',
    }
    
})