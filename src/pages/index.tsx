
import { HomeContainer, ProductContainer } from "@/styles/pages/home"
import Image from "next/image"
import Head from "next/head"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/libs/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import Link from "next/link"
import { MouseEvent } from "react"


import { Handbag } from "phosphor-react";

import { useShoppingCart } from 'use-shopping-cart'
import { Product } from "use-shopping-cart/core"

export interface ICart {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  currency: string,
  priceId: string
  description: string
  unit_amount: number
  formattedPrice: string
  defaultPriceId:string
}



interface HomeProps {
  products: ICart[]
}


export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart();



  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3.2, // mostra tres produtos por vez
      spacing: 48,
    },
    loop: false,

    breakpoints:{
      '(max-width: 1220px)': {
        slides:{
          perView:3.1,
          spacing:20,
        }
        
      },

      '(max-width: 1200px)': {
        slides:{
          perView:2.5,
          spacing:20,
        }
        
      },
      '(max-width: 992px)': {
        slides:{
          perView:2.1,
          spacing:20,
        }
        
      },

      '(max-width: 768px)': {
        slides:{
          perView:1.5,
          spacing:20,
        }
        
      },

      '(max-width: 576px)': {
        slides:{
          perView:1.1,
          spacing:20,
        }
        
      }

      
    }

  })




  const handleAddProduct = (e: MouseEvent<HTMLButtonElement>, product: ICart) => {
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
      formattedPrice: product.formattedPrice,

    }

    addItem(payload, {
      count: 1
    })
  }




  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>


      <HomeContainer ref={sliderRef} className="keen-slider">


        {products.map(product => {
          return (

            <Link legacyBehavior key={product.id} href={`/product/${product.id}`} prefetch={false}>

              <ProductContainer className="keen-slider__slide">
                <Image src={product.imageUrl} blurDataURL="files.stripe.com" placeholder="blur" quality={100} width={520} height={480} alt="Mountains" />

                <footer>
                  <div className="product-info" >
                    <strong>{product.name}</strong>
                    <span>{product.formattedPrice}</span>
                  </div>

                  <button onClick={(e) => handleAddProduct(e, product)}><Handbag size={25}></Handbag></button>

                </footer>
              </ProductContainer>
            </Link>

          )
        })}

      </HomeContainer>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => { // SSG (static site render)
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });



  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      price: price.unit_amount,
      formattedPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
      defaultPriceId: price.id,

    }
  })


  return {
    props: {
      products
    },
    revalidate: 60,
  }
}