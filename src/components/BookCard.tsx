import { clsx } from 'clsx'

import { Book, Rating, User } from '@prisma/client'

import { RatingStars } from './RatingStars'

type BookWithRatingsAndUser = Book & {
  ratings: Array<Rating & { user: User }>
}

export type BookWithAvgRating = BookWithRatingsAndUser & {
  id: string
  avgRating: number
  alreadyRead?: boolean
}

type BookCardProps = {
  size?: 'md' | 'lg'
  book: BookWithAvgRating
  className?: string
  onClick?: () => void
}

const modifiers = {
  md: 'w-16 h-24',
  lg: 'w-28 h-40'
}

export function BookCard({
  onClick,
  className,
  book,
  size = 'md'
}: BookCardProps) {
  return (
    <article
      onClick={onClick}
      className={clsx(
        'transition-all relative flex gap-5 w-full max-w-full lg:max-w-xs py-4 px-5 border border-gray-700 rounded-lg bg-gray-700 hover:border-gray-600 hover:cursor-pointer',
        className && className
      )}
    >
      {book?.alreadyRead && (
        <span className="absolute top-0 right-0 block py-1 px-3 rounded-tr-md rounded-bl-md bg-green-300 text-green-100 font-bold text-xs">
          LIDO
        </span>
      )}

      <picture className={modifiers[size]}>
        <img
          className="w-full h-full object-cover"
          src={book.coverUrl}
          alt={book.name}
        />
      </picture>

      <section className="flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-base text-gray-100">{book.name}</h3>
          <p className="text-sm text-gray-400">{book.author}</p>
        </div>

        <RatingStars rating={book.avgRating} />
      </section>
    </article>
  )
}
