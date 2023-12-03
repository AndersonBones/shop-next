import { ImageContainer, SuccessContainer, ImagesList } from "@/styles/pages/success";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "@/libs/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart";
import { useEffect } from "react";


interface Product {
    name: string,
    imageUrl: string,
}
interface SuccessProps {
    customerName: string,
    products: Product[]
}


export default function Success({ customerName, products }: SuccessProps) {

    const manyProducts = products.length >= 1

    const { clearCart } = useShoppingCart();

    useEffect(() => {
        clearCart()
    }, [])


    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <h1>Compra efetuada!</h1>

                {manyProducts && (
                    <>

                        <ImagesList>
                            {
                                products.map(product => {
                                    return (
                                        <>
                                            <ImageContainer>
                                                <Image src={product.imageUrl} width={120} height={110} alt=""></Image>
                                            </ImageContainer>


                                        </>
                                    )
                                })
                            }


                        </ImagesList>
                        <p>
                            Uhuul <strong>{customerName}</strong>,
                            suas <strong>{products.length}</strong> camisetas já estão a caminho da sua casa.
                        </p>
                    </>


                )}

                {!manyProducts && (
                    <>
                        <ImageContainer>
                            <Image src={products[0].imageUrl} width={120} height={110} alt=""></Image>
                        </ImageContainer>

                        <p>
                            Uhuul <strong>{customerName}</strong>,
                            sua <strong>{products[0].name}</strong> já está a caminho da sua casa.
                        </p>
                    </>
                )}



                <Link href='/'>
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>

    )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const sessionId = query.session_id;

    if (!sessionId) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }

    const session = await stripe.checkout.sessions.retrieve(String(sessionId), {
        expand: ['line_items', 'line_items.data.price.product']
    });

    const customerName = session.customer_details.name;
    const response = session.line_items;

    console.log(response.data[0].price.product)

    const products = response.data.map(product => {
        const { name, images } = product.price?.product as Stripe.Product
        return {
            name,
            imageUrl: images[0],
        }
    })

    return {
        props: {
            customerName,
            products
        }
    }
}