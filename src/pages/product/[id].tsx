import { stripe } from '@/libs/stripe';
import { ImageContainer, 
    ProductContainer, 
    ProductDetails, 
    ImageContainerSkeleton, 
    ProductDetailsSkeleton 
} from '@/styles/pages/product';

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Stripe from 'stripe';

import Image from 'next/image';
import { Product } from 'use-shopping-cart/core';
import { ICart } from '..';
import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import {useShoppingCart} from 'use-shopping-cart'

interface ProductProps {
    product:ICart

}

export default function Product({ product }: ProductProps) {

    console.log(product)
    const {addItem} = useShoppingCart();

    const [checkoutSuccess, setCheckoutSuccess] = useState(false)
    const { isFallback } = useRouter()

    const handleAddProduct = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        const payload: Product = {
          id: product.id,
          name: product.name,
          imageUrl: product.imageUrl,
          price: product.price,
          sku: product.id,
          currency: 'BRL',
          price_id: product.defaultPriceId,
          description: product.description,
          formattedPrice:product.formattedPrice
        }

        addItem(payload, {
          count: 1
        })
      }

    if(isFallback){
        return (
            <ProductContainer>
                <ImageContainerSkeleton>
                    
                </ImageContainerSkeleton>

                <ProductDetailsSkeleton>
                    <h1></h1>
                    <span></span>

                    <button></button>
                </ProductDetailsSkeleton>
            </ProductContainer>
        )
    }


    return (

        <>

            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            
            <ProductContainer>
                
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt='' />
                </ImageContainer>

                

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span><strong>{product.formattedPrice}</strong></span>

                    <p>
                        {product.description}
                    </p>

                    <button disabled={checkoutSuccess} onClick={(e)=> handleAddProduct(e)}>
                        Colocar na Sacola
                    </button>
                </ProductDetails>
            </ProductContainer>

        </>

    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { id: 'prod_P4gbrCxjt7BF9R' }
            }
        ],
        fallback: true
    }
}


export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const productId = params.id; // get ID params

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                description:product.description,
                price:price.unit_amount,
                formattedPrice: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format((price.unit_amount as number) / 100),
                defaultPriceId: price.id,
                
            }
        },
        revalidate: 60 * 60 / 1
    }
}