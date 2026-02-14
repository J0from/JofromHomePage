import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Human + Machine",
  description: "Accelerator platform for solo builders working on side projects",
  icons: {
    icon: "/favicon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
        <Analytics />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LXZ15J9WXC" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LXZ15J9WXC');
          `}
        </Script>
        <Script id="apollo-tracking" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"67bf83dfb3cf560011018a4f"})},document.head.appendChild(o)}initApollo();
          `}
        </Script>
        <Script
          src="https://brand.jofrom.io/js/external-tracking.js"
          data-tracking-id="tk_d578a68c1f514adcb5c4007bd9541703"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
