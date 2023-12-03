import { getCssText } from '@/styles'
import { Html, Head, Main, NextScript } from 'next/document'
import icon from '../assets/shopping-bag.png'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href='/logo.svg' sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
        <style id='stitches' dangerouslySetInnerHTML={{__html:getCssText()}}/>
        <link rel="stylesheet" href="path-to-the-file/splide.min.css"/>
        <link rel="stylesheet" href="url-to-cdn/splide.min.css"/>
        
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}
