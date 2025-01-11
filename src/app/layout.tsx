import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Eduardo Janicas',
    default:
      'Eduardo Janicas - Indie Dev | Integration Engineer @ Stripe | ex-Architect @ Amazon Web Services | Imperial College of London Alumni',
  },
  description:
    'I’m Eduardo, a software engineer and indie developer based in London. This is the space where I consolidate my thoughts and share my experiences. Thoughts and opinions are my own.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
