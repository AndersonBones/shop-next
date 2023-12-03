import { styled } from "..";

export const SuccessContainer = styled('main',{
    
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin:'0 auto',
    height:656,

    h1:{
        fontSize:"$2xl",
        color:'$gray100'
    },

    p:{
        fontSize:"$xl",
        color:"$gray300",
        maxWidth:560,
        textAlign:'center',
        marginTop:'2rem',
    },

    a:{
        display:'block',
        marginTop:'5rem',
        fontSize:'$lg',
        color:'$green500',
        textDecoration:'none',
        fontWeight:"bold",

        '&:hover':{
            color:'$green300',
        }
    }
})

export const ImageContainer = styled('div',{
    
    width:130,
    height:130,
    background:"linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius:'50%',
    padding:'0.25rem',
    marginTop:'4rem',

    display:'flex',
    alignItems:'center',
    justifyContent:'center',

    img:{
        objectFit:'cover',
        width:'100%',
    },

    '&:not(:first-child)':{
        marginLeft:"-1.5rem"
    },
    

    transition:".2s ease ",
    '&:hover': {
        
        boxShadow: ' -4px 0px 30px rgba(0, 0, 0, 0.8)',
        transform: 'translateY(-10%)',
    },
    
    '@md':{
        width:110,
        height:110
    }

})

export const ImagesList = styled('div',{
    display:"flex",
    justifyContent:"center",
})