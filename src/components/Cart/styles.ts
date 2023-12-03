import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@/styles";

export const DialogContent = styled(Dialog.Content,{
    display:'flex',
    flexDirection:'column',
    gap:'2rem',
    padding:'2rem',
    backgroundColor:'$gray800',
    width:500,
    height:'100vh',
    position:'fixed',
    right:0,
    top:0,
    border:'none',
    boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
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
    width:40,
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
        width:101,
        height:93,
        background:"linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
        borderRadius:6,
    },

    '.infoCartContainer':{
        display:'flex',
        flexDirection:"column",
        alignItems:"flex-start",

        button:{
            border:"none",
            marginTop:'auto',
            fontSize:'1rem',
            fontWeight:600,
            backgroundColor:"transparent",
            color:'$green300',
            cursor:'pointer',
        },
        p:{
            fontSize:'$md',
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
})