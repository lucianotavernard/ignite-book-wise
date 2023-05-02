import { useMemo, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

import { clsx } from 'clsx'
import {
  Binoculars,
  BookOpen,
  BookmarkSimple,
  MagnifyingGlass
} from 'phosphor-react'

import { Category } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

import { Sidebar } from '@/components/Common/Sidebar'
import { Drawer } from '@/components/Drawer'
import { Modal } from '@/components/Modal'

import { Input } from '@/components/Form/Input'
import { BookCard, BookWithAvgRating } from '@/components/BookCard'
import { RatingStars } from '@/components/RatingStars'
import { BookRatingCard } from '@/components/BookRatingCard'
import { RatingForm } from '@/components/RatingForm'

export default function Explore() {
  const { status, data: session } = useSession()

  const [showForm, setShowForm] = useState(false)
  const [visibility, setVisibility] = useState(false)
  const [modalVisibility, setModalVisibility] = useState(false)

  const [selectedBook, setSelectedBook] = useState<
    BookWithAvgRating | undefined
  >()
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [search, setSearch] = useState('')

  function handleOpenDrawer(book: BookWithAvgRating) {
    setVisibility(true)
    setSelectedBook(book)
  }

  function handleCloseDrawer() {
    setVisibility(false)
    setSelectedBook(undefined)
  }

  function handleOpenModal() {
    setModalVisibility(true)
  }

  function handleCloseModal() {
    setModalVisibility(false)
  }

  function handleSelectCategory(category: string | undefined) {
    setSelectedCategory(category)
  }

  function handleRateClick() {
    if (status === 'authenticated') {
      setShowForm(true)
    }
  }

  const { data: categories = [] } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const { data } = await api.get('/books/categories')
      return data?.categories ?? []
    }
  )

  const { data: books = [] } = useQuery<BookWithAvgRating[]>(
    ['books', selectedCategory],
    async () => {
      const { data } = await api.get('/books', {
        params: {
          category: selectedCategory
        }
      })
      return data?.books ?? []
    }
  )

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  const sortedRatingsByDate = useMemo(
    () =>
      selectedBook?.ratings.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ) ?? [],
    [selectedBook]
  )

  const canRate = selectedBook?.ratings.every(
    (rating) => rating.userId !== session?.user?.id
  )

  return (
    <main className="overflow-hidden relative z-10 grid grid-cols-[auto_1fr] gap-8 w-full h-screen p-6">
      <Sidebar />

      <div className="overflow-hidden flex flex-col w-full max-w-5xl h-full mt-16 mx-auto">
        <header className="flex justify-between gap-10">
          <div className="flex items-center gap-3">
            <Binoculars className="w-8 h-8 text-green-100" />

            <h1 className="font-bold text-2xl text-gray-100">Explorar</h1>
          </div>

          <Input
            onChange={(event) => setSearch(event.target.value)}
            className="max-w-md"
            placeholder="Buscar livro ou autor"
            icon={<MagnifyingGlass className="w-5 h-5" />}
          />
        </header>

        <nav className="flex flex-wrap gap-3 mt-10 mb-12">
          {categories.map((category) => (
            <a
              key={category.id}
              role="button"
              onClick={() => handleSelectCategory(category.id)}
              className={clsx(
                'transition-all py-1 px-4 border border-purple-100 rounded-full bg-none text-sm text-purple-100 hover:bg-purple-200 hover:text-gray-100',
                {
                  'border-purple-200 bg-purple-200 !text-gray-100':
                    selectedCategory === category.id
                }
              )}
            >
              {category.name}
            </a>
          ))}
        </nav>

        <section className="scrollbar-none overflow-y-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-[188px] gap-5 h-full pb-10">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              size="lg"
              className="grid grid-cols-[112px_1fr]"
              onClick={() => handleOpenDrawer(book)}
              book={book}
            />
          ))}
        </section>
      </div>

      <Drawer visible={visibility} onClose={handleCloseDrawer}>
        {/* <!-- Your content --> */}
        {selectedBook && (
          <>
            <div className="flex flex-col gap-10 py-6 px-8 rounded-md bg-gray-700">
              <article className="flex gap-8">
                <picture className="flex w-44 rounded-xl">
                  <img
                    className="rounded-xl"
                    src={selectedBook.coverUrl}
                    alt={selectedBook.name}
                  />
                </picture>

                <div className="flex flex-col justify-between">
                  <header>
                    <h5>{selectedBook.name}</h5>
                    <p className="text-gray-300">{selectedBook.author}</p>
                  </header>

                  <section>
                    <RatingStars size="md" rating={3} />

                    <p className="mt-1 text-sm text-gray-400">
                      {selectedBook.avgRating}{' '}
                      {selectedBook.avgRating > 1 ? 'avaliação' : 'avaliações'}
                    </p>
                  </section>
                </div>
              </article>

              <section className="flex gap-14 border-t border-gray-600">
                <div className="flex items-center gap-4 pt-6">
                  <BookmarkSimple className="w-6 h-6 text-green-100" />

                  <div>
                    <p className="text-sm text-gray-300">Categorias</p>
                    <h1 className="bold text-lg text-gray-200">
                      Programação, Educação
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-6">
                  <BookOpen className="w-6 h-6 text-green-100" />

                  <div>
                    <p className="text-sm text-gray-300">Páginas</p>
                    <h1 className="bold text-lg text-gray-200">365</h1>
                  </div>
                </div>
              </section>
            </div>

            <div>
              <section className="flex flex-col gap-4">
                <header className="flex justify-between items-center">
                  <h5 className="text-sm text-gray-100">Avaliações</h5>

                  <button
                    type="button"
                    onClick={canRate ? handleRateClick : handleOpenModal}
                    className="transition-all flex items-center gap-2 py-2 px-3 rounded font-bold text-base text-purple-100 bg-transparent hover:bg-purple-100/5"
                  >
                    Avaliar
                  </button>
                </header>

                {showForm && (
                  <RatingForm
                    bookId={selectedBook.id}
                    onCancel={() => setShowForm(false)}
                  />
                )}

                <section className="flex flex-col gap-3">
                  {sortedRatingsByDate.map((rating) => (
                    <BookRatingCard key={rating.id} rating={rating} />
                  ))}
                </section>
              </section>
            </div>
          </>
        )}
      </Drawer>

      <Modal visible={modalVisibility} onClose={handleCloseModal}>
        <>
          <h2 className="text-base text-gray-200">
            Faça login para deixar sua avaliação
          </h2>

          <div className="flex flex-col gap-4 w-full mt-10">
            <button
              type="button"
              className="transition-colors flex items-center gap-5 w-full py-5 px-6 border-none rounded-lg font-bold text-lg bg-gray-600 text-gray-200 hover:bg-gray-500"
            >
              <Image
                width={32}
                height={32}
                src="/images/icons/google.svg"
                alt="Google Logo"
              />
              Entrar com Google
            </button>

            <button
              type="button"
              className="transition-colors flex items-center gap-5 w-full py-5 px-6 border-none rounded-lg font-bold text-lg bg-gray-600 text-gray-200 hover:bg-gray-500"
            >
              <Image
                width={32}
                height={32}
                src="/images/icons/github.svg"
                alt="Github Logo"
              />
              Entrar com GitHub
            </button>
          </div>
        </>
      </Modal>
    </main>
  )
}
