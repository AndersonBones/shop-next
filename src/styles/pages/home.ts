import { keyframes } from "@stitches/react";
import { styled } from "..";

export const HomeContainer = styled('main',{
    display:'flex',
    width:'100%',
    maxWidth:'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft:"auto",
    minHeight:656,
});

export const ProductContainer = styled('a',{
    background:"linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius:8,
    cursor:"pointer",
    position:'relative',
    overflow:"hidden",

    display:"flex",
    alignItems:"center",
    justifyContent:"center",

    img:{
        objectFit:'cover'
    },

    footer:{
        position:"absolute",
        bottom:'0.25rem',
        left:'0.25rem',
        right:'0.25rem',
        padding:"1rem",
        borderRadius:6,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        cursor:'default',
        transform:"translateY(110%)",
        opacity:0,
        transition:"all 0.2s ease-in-out",
        backgroundColor:"rgba(0,0,0,0.6)",
        strong:{
            fontSize:'$lg',
            color:"$gray100"
        },
        span:{
            fontSize:'$xl',
            fontWeight:"bold",
            color:'$green300',
        },

        '.product-info':{
            display:"flex",
            flexDirection:"column",
            gap:'8px',
        },
    },

    button:{
        cursor:"pointer",
        backgroundColor:"$green500",
        border:"none",
        padding:'.5rem',
        borderRadius:"6px",
        color:"$white",
        fontWeight:600,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',

        '&:hover':{
            backgroundColor:"$green300"
        },

    },

    '&:hover':{
        footer:{
            transform:"translateY(0%)",
            opacity:1
        },
    },


})



