import Head from 'next/head'
import Link from 'next/link'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

import { Sidebar } from '@/components/Common/Sidebar'

import { BookCard, BookWithAvgRating } from '@/components/BookCard'
import { RatingCard, RatingWithAuthorAndBook } from '@/components/RatingCard'

export default function Home() {
  const { data: ratings = [] } = useQuery<RatingWithAuthorAndBook[]>(
    ['latest-ratings'],
    async () => {
      const { data } = await api.get('/ratings/latest')
      return data?.ratings ?? []
    }
  )

  const { data: session } = useSession()
  const userId = session?.user?.id

  const { data: latestUserRating = null } = useQuery<RatingWithAuthorAndBook>(
    ['latest-user-rating', userId],
    async () => {
      const { data } = await api.get('/ratings/user-latest')
      return data?.rating ?? null
    },
    {
      enabled: !!userId
    }
  )

  const { data: popularBooks = [] } = useQuery<BookWithAvgRating[]>(
    ['popular-books'],
    async () => {
      const { data } = await api.get('/books/popular')
      return data?.books ?? []
    }
  )

  return (
    <main className="overflow-hidden grid grid-cols-[auto_1fr] gap-6 w-full h-screen p-6">
      <Head>
        <title>Home | BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <Sidebar />

      <div className="overflow-hidden flex w-full max-w-5xl h-full mt-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-6 lg:gap-16 h-full">
          <div className="scrollbar-none overflow-y-auto flex flex-col w-full max-w-2xl h-full pb-16">
            <header className="flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <span className="text-green-100">
                  <ChartLineUp className="w-8 h-8" />
                </span>

                <h1 className="font-bold text-2xl text-gray-100">Início</h1>
              </div>

              <h5 className="text-sm text-gray-100">
                Avaliações mais recentes
              </h5>
            </header>

            {latestUserRating && (
              <div>
                <header className="flex justify-between items-center gap-4 mb-4">
                  <h5 className="text-sm">Sua última leitura</h5>

                  <Link
                    className="transition-all flex items-center gap-2 py-2 px-3 rounded font-bold text-base text-purple-100 bg-transparent hover:bg-purple-100/5"
                    href="/profile/1"
                  >
                    Ver todas
                    <CaretRight className="w-4 h-4" />
                  </Link>
                </header>

                <section className="flex flex-col gap-4 mt-4">
                  <RatingCard variant="compact" rating={latestUserRating} />
                </section>
              </div>
            )}

            <section className="flex flex-col gap-4 mt-4">
              {ratings.map((rating) => (
                <RatingCard key={rating.id} rating={rating} />
              ))}
            </section>
          </div>

          <div className="scrollbar-none overflow-y-auto flex flex-col gap-4 h-full">
            <header className="flex justify-between items-center">
              <h5 className="text-sm text-gray-100">Livros populares</h5>

              <Link
                className="transition-all flex items-center gap-2 py-2 px-3 rounded font-bold text-base text-purple-100 bg-transparent hover:bg-purple-100/5"
                href="/explore"
              >
                Ver todos
                <CaretRight className="w-4 h-4" />
              </Link>
            </header>

            <section className="flex flex-col gap-3">
              {popularBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
