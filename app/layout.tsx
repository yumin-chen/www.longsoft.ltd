'use client'

import '../styles/index.css'
import '../styles/prism-a11y-dark.css'

import { css } from '../styled-system/css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatePresence } from 'framer-motion'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Long Soft, Ltd. - Building the next-generation low-code/no-code programming software" />
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </head>
      <body className={css({
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bg: 'neutral.950',
        color: 'neutral.50',
      })}>
        <div className={css({
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          gap: '0',
        })}>
          <Header />
          <div className={css({ flex: '1' })}>
            <AnimatePresence
              mode="wait"
              initial={true}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              {children}
            </AnimatePresence>
          </div>
          <Footer />
        </div>
        <NetlifyIdentityRedirect />
      </body>
    </html>
  )
}
