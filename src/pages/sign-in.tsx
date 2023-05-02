import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  const router = useRouter()

  function handleSignIn(provider?: string) {
    if (!provider) {
      router.push('/')
      return
    }

    signIn(provider, {
      callbackUrl: '/'
    })
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[600px_1fr] min-h-screen p-6">
      <Head>
        <title>Sign-in | BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <aside className="flex">
        <div className="flex justify-center items-center w-full rounded-lg bg-[url('/images/bg-logo-section.png')] bg-no-repeat bg-center bg-cover">
          <Image width={232} height={58} src="/logo.svg" alt="BookWise" />
        </div>
      </aside>

      <section className="flex justify-center">
        <div className="flex flex-col justify-center w-full max-w-sm px-4">
          <h1 className="text-2xl text-gray-100">Boas vindas!</h1>
          <p className="text-base text-gray-200">
            Faça seu login ou acesse como visitante.
          </p>

          <div className="flex flex-col gap-4 mt-10">
            <button
              type="button"
              onClick={() => handleSignIn('google')}
              className="transition-colors flex items-center gap-5 w-full py-5 px-6 border-none rounded-lg font-bold text-lg bg-gray-600 text-gray-200 hover:bg-gray-500"
            >
              <Image
                width={32}
                height={32}
                src="/images/icons/google.svg"
                alt="Google Logo"
              />{' '}
              Entrar com Google
            </button>
            <button
              type="button"
              onClick={() => handleSignIn('github')}
              className="transition-colors flex items-center gap-5 w-full py-5 px-6 border-none rounded-lg font-bold text-lg bg-gray-600 text-gray-200 hover:bg-gray-500"
            >
              <Image
                width={32}
                height={32}
                src="/images/icons/github.svg"
                alt="Github Logo"
              />{' '}
              Entrar com GitHub
            </button>
            <button
              type="button"
              onClick={() => handleSignIn()}
              className="transition-colors flex items-center gap-5 w-full py-5 px-6 border-none rounded-lg font-bold text-lg bg-gray-600 text-gray-200 hover:bg-gray-500"
            >
              <Image
                width={32}
                height={32}
                src="/images/icons/rocket.svg"
                alt="Rocket Icon"
              />{' '}
              Accessar como visitante
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
