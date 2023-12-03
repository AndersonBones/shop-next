import { ProductPayload } from "@/components/Cart/Cart";
import { stripe } from "@/libs/stripe";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const {cartProducts} = req.body

    if(req.method != 'POST'){
        return res.status(405).json({error:"Method not allowed."})
    }
    if(!cartProducts){
        return res.status(400).json({error:"Price not found."})
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url:successUrl,
        cancel_url:cancelUrl,
        mode:'payment',
        line_items:cartProducts
    })

    return res.status(201).json({ // retorno da requsiição
        checkoutUrl:checkoutSession.url
    });
}

