import * as Dialog from "@radix-ui/react-dialog";
import CartButton from "../CartButton/CartButton";
import { CartItem, CartList, DialogClose, DialogContent, FooterContainer, DialogTrigger } from "./styles";
import { X } from "phosphor-react";
import Image from "next/image";
import {useShoppingCart} from 'use-shopping-cart'
import { CartEntry } from "use-shopping-cart/core";
import axios from "axios";
import { useState } from "react";


export interface ProductPayload{
    price:string,
    quantity:number
}
export default function Cart() {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    
    const {cartDetails, removeItem} = useShoppingCart()
    let products:CartEntry[] = []

    if(cartDetails){
        products = Object.values(cartDetails)
    }


    let total_price = 0;
    products.map(product=>{
        total_price+=(product.price/100)
    })

  

    const handleBuyProduct = async ()=>{
        try {
            setIsCreatingCheckoutSession(true)

            // get id and quantity from cart products list
            const cartProducts = products.reduce((items:ProductPayload[], product)=>{
                items.push({
                    price:product.price_id,
                    quantity:product.quantity
                })

                return items
            },[])
            
            // requisição POST para o servidor nextjs 
            const response = await axios.post('/api/checkout',{
                cartProducts,
            })

            console.log(isCreatingCheckoutSession)
            
            const {checkoutUrl} = response.data // get success link
            window.location.href = checkoutUrl // redirect to success link

        } catch (error) {
            setIsCreatingCheckoutSession(false)
            alert('Falha ao redirecionar ao checkout!')
        }
    }
    return (
        <Dialog.Root>

            <DialogTrigger >
                <span>{products.length}</span>
                <CartButton></CartButton>
            </DialogTrigger>

            <Dialog.Portal>


                <DialogContent >
                    <DialogClose>
                        <button><X size={25}></X></button>
                    </DialogClose>

                    <Dialog.Title>Sacola de compras</Dialog.Title>

                    <CartList>

                        {products.map(product => {
                            return (
                                <CartItem key={product.id}>
                                    <div className="imageCartContainer">
                                        <Image src={product.imageUrl} width={100} height={100} alt=""></Image>
                                        
                                    </div>

                                    

                                    <div className="infoCartContainer">
                                        <p>{product.name} <br /> <strong>{product.formattedPrice}</strong></p>
                                        <button onClick={()=>removeItem(product.id)}>Remover</button>
                                        
                                    </div>
                                    
                                </CartItem>
                            )
                        })}


                    </CartList>

                    <FooterContainer>
                        <div className="quantity">
                            <p>Quantidade</p>
                            <span>{products.length} items</span>
                        </div>

                        <div className="total">
                            <strong>Valor total</strong>
                            <strong>{new Intl.NumberFormat('pt-BR',{
                                style:"currency",
                                currency:"BRL"
                            }).format(total_price)}</strong>
                        </div>

                        <button disabled={isCreatingCheckoutSession} type="submit" onClick={()=> handleBuyProduct}>Finalizar compra</button>
                    </FooterContainer>



                </DialogContent>
            </Dialog.Portal>

        </Dialog.Root>
    )
}