import '@/global/global.scss'
import localFont from 'next/font/local'
import SmoothScroll from '@/utils/SmoothScroll'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import SchemaOrganization from '@/global/Schema/Organization'
import { locale } from '@/global/Seo'

const Poppins = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['sans-serif'],
})
// // Add varaible font
// const CinzelDecorative = localFont({
//   src: [
//     {
//       path: '../assets/fonts/CinzelDecorative-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     }
//   ],
//   display: 'swap',
//   fallback: ['sans-serif'],
//   variable: '--cinzel-decorative',
// })

// // Change themeColor to a color that matches the design
// export const viewport = {
//   themeColor: '#FBF7F6',
// }

// export const runtime = 'edge'

export default function RootLayout({ children }) {
  return (
    <html lang={locale}>
      <head>
        <SchemaOrganization />
      </head>
        <body className={Poppins.className}>
          <Header />
          <SmoothScroll>
            <main id="main">
              {children}
            </main>
          </SmoothScroll>
          <Footer />
        </body>
    </html>
  )
}