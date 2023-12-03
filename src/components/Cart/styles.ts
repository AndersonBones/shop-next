import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@/styles";

export const DialogContent = styled(Dialog.Content,{
    display:'flex',
    flexDirection:'column',
    gap:'2rem',
    padding:'2rem',
    backgroundColor:'$gray800',
    width:'35rem',
    height:'100vh',
    position:'fixed',
    right:0,
    top:0,
    border:'none',
    boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

    overflowY:"auto",

    '@sm':{
        width:"100%",
    }
})

export const DialogTrigger = styled(Dialog.Trigger,{
    position:"relative",
    border:'none',
    backgroundColor:"transparent",

    span:{
        top:0,
        right:0,
        transform:'translate(50%,-50%)',
        position:"absolute",
        color:"$gray100",
        fontWeight:600,
        width:25,
        height:25,
        backgroundColor:"$green500",
        borderRadius:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
})


export const DialogClose = styled(Dialog.Close,{
    display:"inline-block",
    backgroundColor:'transparent',
    border:'none',
    marginLeft:'auto',
    
    button:{
        cursor:'pointer',
        width:'100%',
        background:'transparent',
        border:'none',
        color:'$gray100',
    }
})

export const BackCatalog = styled(Dialog.Close,{
    display:"inline-block",
    backgroundColor:"transparent",
    border:"none",


    button:{
        fontSize:"$lx",
        backgroundColor:"transparent",
        border:"none",
        color:"$green500",
        cursor:"pointer",
        fontWeight:"600",
    }
})

export const CartList = styled('div',{
    display:"flex",
    flexDirection:'column',
    gap:'2rem'
})

export const CartItem = styled('div',{
    
    display:"flex",
    gap:'1rem',


    '.imageCartContainer':{
        display:'flex',
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
        width:120,
        background:"linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
        borderRadius:6,

        img:{
            objectFit:"cover",
            width:"100%",
        }
    },

    '.infoCartContainer':{
        display:'flex',
        flexDirection:"column",
        gap:'1rem',
        alignItems:"flex-start",
        

        button:{
            border:"none",
            marginTop:'auto',
            fontSize:'1rem',
            fontWeight:600,
            backgroundColor:"transparent",
            color:'$green500',
            cursor:'pointer',

            '&:hover':{

                color:'$green300' 
            }
        },
        p:{
            fontSize:'$md',
        },

        '.amount-product':{
            display:'flex',
            gap:'.7rem',
            backgroundColor:"$gray900",
            padding:"6px",
            borderRadius:"6px",

            button:{
                display:"flex",
                alignItems:"center",
                backgroundColor:"$green500",
                color:"$white",
                borderRadius:"3px",
            }
        }
    }
})


export const FooterContainer = styled('footer',{
    marginTop:'auto',
    display:'flex',
    flexDirection:"column",
    gap:'1rem',

    div:{
        width:'100%',
        display:"flex",
        justifyContent:'space-between',  
    },

    '.total > strong':{
        fontSize:'$lg'
    },

    button:{
        marginTop:'1rem',
        backgroundColor:"$green500",
        borderRadius:'6px',
        padding:'1rem',
        border:'none',
        cursor:'pointer',
        color:'$gray100',
        fontSize:"$md",
        fontWeight:600,

        '&:hover':{
            backgroundColor:"$green300"
        },

        '&:disabled':{
            cursor:'not-allowed'
        }
    },

    '.info-card':{
        marginTop:"1rem",
        textAlign:"center",
        fontSize:'.9rem',
        backgroundColor:"$gray900",
        padding:".7rem",
        borderRadius:"6px",
    }
})


export const CartEmpity = styled("div",{
    marginTop:"2rem",
    display:"flex",
    flexDirection:"column",
    gap:"1rem",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center"
})