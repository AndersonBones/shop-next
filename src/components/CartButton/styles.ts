import { styled } from "@/styles";

export const CartButtonContainer = styled('button',{
    background:"$gray800",
    display:'inline-block',
    color:'$gray100',
    border:'none',
    padding:'.5rem .7rem',
    borderRadius:'6px',
    cursor:'pointer',

    '&:disabled':{
        cursor:'not-allowed',
    },
})