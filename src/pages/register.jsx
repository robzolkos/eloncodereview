import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link rel="canonical" href="https://eloncodereview.com" />
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Just a fun little site made by Rob Zolkos
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Follow Rob on {' '}
              <Link
                href="https://twitter.com/robzolkos"
                className="font-medium text-blue-600 hover:underline"
              >
                Twitter
              </Link>{' '}
              for more shenanigans.
            </p>

            <p className="mt-2 text-sm text-gray-700">
              Or email Rob at {' '}
              <Link
                href="mailto:robzolkos@hey.com"
                className="font-medium text-blue-600 hover:underline"
              >
                robzolkos@hey.com
              </Link>{' '}
            </p>

            <div className="mt-12 italic">
                ♻️ You should absolutely not be printing out code for any reason.
            </div>
          </div>
        </div>

      </AuthLayout>
    </>
  )
}
