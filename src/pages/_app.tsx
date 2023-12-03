

import dynamic from 'next/dynamic';
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logo from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app';
import Image from 'next/image';


import Link from 'next/link';
import Cart from '@/components/Cart/Cart';

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';



const CartProviderComponent = dynamic(()=> import('../components//Cart//CartProvider'),{
  ssr:false
})




globalStyles();

export default function App({ Component, pageProps }: AppProps) {


  return (
    <CartProviderComponent>
      <Container>
          <Header>
            <Link prefetch={false} href='/' legacyBehavior>
              <Image src={logo} alt="" />
            </Link>

            <Cart></Cart>
          </Header>

          <Component {...pageProps} />
        </Container>
    </CartProviderComponent>
      
   





  )
}
