import { RatingStars } from './RatingStars'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'

type User = {
  name: string
  avatarUrl?: string
}

type Book = {
  name: string
  author: string
  summary: string
  cover_url: string
}

type Rating = {
  id: string
  rate: number
  createdAt: Date
}

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingWithAuthorAndBook
  variant?: 'default' | 'compact'
}

const MAX_SUMMARY_LENGTH = 180

export function RatingCard({ rating, variant = 'default' }: RatingCardProps) {
  const distance = getRelativeTimeString(new Date(rating.createdAt))

  const summary = rating.book.summary
    .substring(0, MAX_SUMMARY_LENGTH)
    .concat('...')

  return (
    <article className="flex flex-col gap-8 w-full p-6 rounded-lg bg-gray-700">
      {variant === 'default' && (
        <header className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <picture className="bg-gradient-to-r from-green-50 to-purple-50 rounded-full p-[2px]">
              <img
                className="w-10 h-10 rounded-full"
                src={rating.user.avatarUrl}
                alt={rating.user.name}
              />
            </picture>

            <div>
              <h5 className="text-base text-gray-100">{rating.user.name}</h5>
              <time className="text-sm text-gray-400">{distance}</time>
            </div>
          </div>

          <div className="flex justify-center">
            <RatingStars rating={rating.rate} />
          </div>
        </header>
      )}

      <section className="flex gap-5">
        <picture>
          <img className="w-full" src={rating.book.cover_url} alt="" />
        </picture>

        <div className="flex flex-col gap-4">
          <div>
            {variant === 'compact' && (
              <div>
                <p className="text-sm text-gray-300">{distance}</p>
                <div className="flex justify-center">{rating.rate}</div>
              </div>
            )}

            <h3 className="font-bold text-base text-gray-100">
              {rating.book.name}
            </h3>
            <p className="text-sm text-gray-400">{rating.book.author}</p>
          </div>

          <p className={'text-sm text-gray-300'}>
            {summary}

            {rating.book.summary.length > MAX_SUMMARY_LENGTH && (
              <button
                type="button"
                className="border-none bg-none font-bold text-purple-100 text-sm"
              >
                ver mais
              </button>
            )}
          </p>
        </div>
      </section>
    </article>
  )
}
