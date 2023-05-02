import { useMemo, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'

import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  UserList
} from 'phosphor-react'

import { api } from '@/lib/axios'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'

import { RatingStars } from '@/components/RatingStars'
import { Sidebar } from '@/components/Common/Sidebar'
import { Input } from '@/components/Form/Input'

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category
      }[]
  }
}

export type Profile = {
  ratings: ProfileRating[]
  user: {
    name: string
    avatarUrl: string
    memberSince: string
  }
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory?: string
}

export default function Profile() {
  const router = useRouter()
  const { data: session } = useSession();
  
  const [search, setSearch] = useState('')

  const user = session?.user;
  const userId = router.query.id as string

  const { data: profile } = useQuery<Profile>(
    ['profile', userId],
    async () => {
      const { data } = await api.get(`/profile/${userId}`)
      return data?.profile
    },
    {
      enabled: !!userId
    }
  )

  const filteredRatings = useMemo(() => {
    if (!profile) return []

    return profile.ratings
      .filter((rating) => {
        return rating.book.name.toLowerCase().includes(search.toLowerCase())
      })
      .map((rating) => ({
        ...rating,
        distance: getRelativeTimeString(new Date(rating.createdAt))
      }))
  }, [profile, search])

  const memberSinceYear = profile && new Date(profile.user.memberSince).getFullYear()

  return (
    <main className="overflow-hidden grid grid-cols-[auto_1fr] gap-6 w-full h-screen p-6">
      <Sidebar />

      <div className="scrollbar-none overflow-y-auto flex w-full max-w-5xl h-full mt-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-6 lg:gap-16 w-full h-full">
          <div className="flex flex-col gap-10 w-full max-w-2xl pb-16">
            { user ? (
              <h1 className="font-bold text-2xl text-gray-100">Perfil</h1>
            ) : (
              <Link
                href="/"
                className="self-start transition-colors py-2 px-3 rounded bg-transparent text-base text-gray-200 hover:bg-gray-200/5"
              >
                Voltar
              </Link>
            )}

            <header className="flex flex-col gap-10">
              <Input
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar livro avaliado"
                icon={<MagnifyingGlass className="w-5 h-5" />}
              />
            </header>

            <section className="flex flex-col gap-6">
              {filteredRatings.map((rating) => (
                <article key={rating.id} className="flex flex-col gap-2">
                  <h5 className="capitalize text-sm text-gray-300">
                    {rating.distance}
                  </h5>

                  <section className="flex flex-col gap-6 p-6 rounded-lg bg-gray-700">
                    <header className="flex gap-6">
                      <Link
                        href={`/explore?book=${rating.book.id}`}
                        className="flex"
                      >
                        <Image
                          width={98}
                          height={134}
                          src={rating.book.coverUrl}
                          alt={rating.book.name}
                          className="transition-all rounded object-cover hover:filter hover:brightness-125"
                        />
                      </Link>

                      <section className="flex flex-col justify-between">
                        <div>
                          <h5 className="text-lg text-gray-100">
                            {rating.book.name}
                          </h5>
                          <p className="text-sm text-gray-400">
                            {rating.book.author}
                          </p>
                        </div>

                        <RatingStars rating={rating.rate} />
                      </section>
                    </header>

                    <section>
                      <p className="text-sm text-gray-300">
                        {rating.description}
                      </p>
                    </section>
                  </section>
                </article>
              ))}

              <p className="text-sm text-center text-gray-400">
                {filteredRatings.length === 0 && search
                  ? 'Nenhum resultado encontrado'
                  : 'Nenhuma avaliação encontrada'}
              </p>
            </section>
          </div>

          {profile && (
            <aside className="flex flex-col items-center gap-12 h-max py-10 lg:p-0 border-t border-gray-700 lg:border-t-0 lg:border-l">
              <header className="flex flex-col items-center gap-5">
                <picture className="flex w-20 p-0.5 rounded-full bg-gradient-to-b from-green-50 to-purple-50">
                  <img
                    alt={profile.user.name}
                    src={profile.user.avatarUrl}
                    className="w-full rounded-full object-cover"
                  />
                </picture>

                <div className="text-center">
                  <h3 className="text-xl text-gray-100">{profile.user.name}</h3>
                  <p className="text-sm text-gray-400">
                    membro desde {memberSinceYear}
                  </p>
                </div>
              </header>

              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-green-50 to-purple-50" />

              <section>
                <ul className="flex flex-col gap-10">
                  <li className="flex gap-5">
                    <BookOpen size={32} className="text-green-100" />

                    <div>
                      <strong className="text-gray-200">
                        {profile.readPages}
                      </strong>
                      <p className="text-sm text-gray-300">Páginas lidas</p>
                    </div>
                  </li>

                  <li className="flex gap-5">
                    <Books size={32} className="text-green-100" />

                    <div>
                      <strong className="text-gray-200">
                        {profile.ratedBooks}
                      </strong>
                      <p className="text-sm text-gray-300">Livros avaliados</p>
                    </div>
                  </li>

                  <li className="flex gap-5">
                    <UserList size={32} className="text-green-100" />

                    <div>
                      <strong className="text-gray-200">
                        {profile.readAuthors}
                      </strong>
                      <p className="text-sm text-gray-300">Autores lidos</p>
                    </div>
                  </li>

                  <li className="flex gap-5">
                    <BookmarkSimple size={32} className="text-green-100" />

                    <div>
                      <strong className="text-gray-200">
                        {profile.mostReadCategory}
                      </strong>
                      <p className="text-sm text-gray-300">
                        Categoria mais lida
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
            </aside>
          )}
        </div>
      </div>
    </main>
  )
}
