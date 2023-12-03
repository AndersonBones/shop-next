
import { ReactNode } from "react";
import { CartProvider  } from "use-shopping-cart";

export default function CartProviderComponent({ children }: { children: ReactNode }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      successUrl="http://localhost:3000"
      cancelUrl="http://localhost:3000/nowosci"
      currency="BRL"
      billingAddressCollection={true}
      shouldPersist={true}
      language="pt-BR"
    >
      {children}
    </CartProvider>
  );
}