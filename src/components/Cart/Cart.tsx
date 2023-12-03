import * as Dialog from "@radix-ui/react-dialog";
import CartButton from "../CartButton/CartButton";
import { CartItem, CartList, DialogClose, 
    DialogContent, FooterContainer, 
    DialogTrigger, CartEmpity, BackCatalog } from "./styles";
import { X, Plus, Minus, SmileyMeh } from "phosphor-react";
import Image from "next/image";
import { useShoppingCart } from 'use-shopping-cart'
import { CartEntry } from "use-shopping-cart/core";

import { useState } from "react";
import axios from "axios";


export interface ProductPayload {
    price: string,
    quantity: number
}
export default function Cart() {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    // shopping cart methods
    const { cartDetails, removeItem, incrementItem, decrementItem} = useShoppingCart()
    let products: CartEntry[] = []

    if (cartDetails) {
        products = Object.values(cartDetails)
    }


    let total_price = 0;
    products.map(product => {
        total_price += (product.value / 100)
    })

    const cartHasEmpity = products.length >= 1 // cart has empity?

    

    const handleBuyProduct = async () => { // buy products 

        try {
            setIsCreatingCheckoutSession(true)

            // get id and quantity from cart products list
            const cartProducts = products.reduce((items: ProductPayload[], product) => {
                items.push({
                    price: product.price_id,
                    quantity: product.quantity
                })

                return items
            }, [])

            // requisição POST para o servidor nextjs 
            const response = await axios.post('/api/checkout',{
                cartProducts,
            })

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
                {products.length >= 1 && (<span>{products.length}</span>)}

                <CartButton></CartButton>
            </DialogTrigger>

            <Dialog.Portal>


                <DialogContent >
                    <DialogClose>
                        <button><X size={25}></X></button>
                    </DialogClose>

                    {cartHasEmpity == true && (
                        <>
                            <Dialog.Title>Sacola de compras</Dialog.Title>

                            <CartList>

                                {products.map(product => {
                                    return (
                                        <CartItem key={product.id}>
                                            <div className="imageCartContainer">
                                                <Image src={product.imageUrl} width={100} height={100} alt=""></Image>

                                            </div>



                                            <div className="infoCartContainer">
                                                <p>{product.name} <br /> <strong>{product.formattedValue}</strong></p>
                                                <div className="amount-product">
                                                    <button onClick={()=> decrementItem(product.id)}><Minus size={20}></Minus></button>
                                                    <span>{product.quantity}</span>
                                                    <button onClick={()=> incrementItem(product.id)}><Plus size={20}></Plus></button>
                                                </div>
                                                <button onClick={() => removeItem(product.id)}>Remover</button>
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
                                    <strong>{new Intl.NumberFormat('pt-BR', {
                                        style: "currency",
                                        currency: "BRL"
                                    }).format(total_price)}</strong>
                                </div>

                                <button disabled={isCreatingCheckoutSession} type="submit" onClick={handleBuyProduct}>Finalizar compra</button>
                                
                                <span className="info-card">
                                    Dados bancários para gerar uma compra de teste, número do <br />
                                    cartão <strong>4242 4242 4242 4242</strong>, data de validade <strong>02/24</strong> e CVV <strong>404</strong>

                                </span>
                            </FooterContainer>
                        </>
                    )}


                    {cartHasEmpity == false && (
                        <>
                            <Dialog.Title>Sacola de compras</Dialog.Title>

                            <CartEmpity>
                                <SmileyMeh size={80}></SmileyMeh>
                                <h1>Oops.. o carrinho está vazio</h1>

                                <BackCatalog>
                                    <button>Voltar ao catálago</button>
                                </BackCatalog>
                            </CartEmpity>
                        </>

                    )}


                </DialogContent>
            </Dialog.Portal>

        </Dialog.Root>
    )
}