import { styled } from "..";

export const ProductContainer = styled('main', {
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    alignItems:"stretch",
    gap:'4rem',

    maxWidth:1180,
    margin:'0 auto',

})

export const ImageContainer = styled('div',{
    width:'100%',
    height:656,
    maxWidth:576,
    background:"linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius:8,
    padding:'0.25rem',

    display:'flex',
    alignItems:"center",
    justifyContent:"center",

    img:{
        objectFit:"cover",
    },
})

export const ProductDetails = styled('div',{
    display:'flex',
    flexDirection:'column',

    h1:{
        fontSize:'$2xl',
        color:'$gray300'
    },

    span:{
        marginTop:'1rem',
        display:'block',
        fontSize:'$2xl',
        color:'$green300',
    },

    p:{
        marginTop:'2.5rem',
        fontSize:"$md",
        lineHeight:1.6,
        color:"$gray300"
    },

    button:{
        marginTop:'auto',
        backgroundColor:'$green500',
        border:"$white",
        borderRadius:8,
        padding:'1.25rem',
        cursor:"pointer",
        fontWeight:"bold",
        fontSize:"$md",
        color:'$gray100',

        '&:hover':{
            backgroundColor:'$green300',

        },

        '&:disabled':{
            opacity:0.6,
            cursor:'not-allowed',
        }
    },
})


// SKELETON

export const ImageContainerSkeleton = styled('div',{
    width:558,
    height:656,
    maxWidth:576,
    background:"$gray800",
    borderRadius:8,
    padding:'0.25rem',

    display:'flex',
    alignItems:"center",
    justifyContent:"center",
})

export const ProductDetailsSkeleton = styled('div',{
    display:'flex',
    flexDirection:'column',

    h1:{
        height:20,
        fontSize:'$2xl',
        background:'$gray800',
        borderRadius:8,
    },

    span:{
        width:'50%',
        height:20,
        marginTop:'1rem',
        display:'block',
        fontSize:'$2xl',
        background:'$gray800',
        borderRadius:8,
    },

    button:{
        marginTop:'auto',
        backgroundColor:'$gray800',
        border:"$white",
        borderRadius:8,
        padding:'1.25rem',
        cursor:"pointer",
        fontWeight:"bold",
        fontSize:"$md",
        color:'$gray100',
    },
})
