import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { SignIn, SignOut } from 'phosphor-react'

import { Navigation } from './Navigation'

export function Sidebar() {
  const { data: session } = useSession()
  const router = useRouter()

  const user = session?.user
  const firstName = user && user.name.split(' ')[0]

  function handleNavigate() {
    router.push(`/profile/${user?.id}`)
  }

  function handleSignOut() {
    signOut()
  }

  return (
    <aside className="flex flex-col justify-between items-center pt-10 pb-6 rounded-xl w-56 bg-[url('/images/bg-sidebar.png')] bg-no-repeat bg-center bg-cover">
      <header className="flex flex-col">
        <picture className="w-32 mb-16">
          <img className="w-full" src="/logo.svg" alt="" />
        </picture>

        <Navigation />
      </header>

      <footer>
        {!user ? (
          <Link
            href="/sign-in"
            className="flex items-center gap-3 border-none bg-none text-gray-200 font-bold text-base hover:opacity-90"
          >
            Fazer login
            <span className="text-green-100">
              <SignIn className="w-5 h-5" />
            </span>
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <picture
              className="bg-gradient-to-r from-green-50 to-purple-50 rounded-full p-[2px] hover:cursor-pointer"
              onClick={handleNavigate}
            >
              <img
                className="w-8 h-8 rounded-full"
                src={user.avatar_url}
                alt={user.name}
              />
            </picture>

            <h5 className="text-sm">{firstName}</h5>

            <SignOut
              className="w-5 h-5 text-[#F75A68]"
              onClick={handleSignOut}
            />
          </div>
        )}
      </footer>
    </aside>
  )
}
