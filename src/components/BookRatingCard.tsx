import { Rating, User } from '@prisma/client'

import { getRelativeTimeString } from '@/utils/getRelativeTimeString'
import { RatingStars } from '@/components/RatingStars'

type BookRating = Rating & {
  user: User
}

type ProfileRatingCard = {
  rating: BookRating
}

export function BookRatingCard({ rating }: ProfileRatingCard) {
  const distance = getRelativeTimeString(new Date(rating.createdAt))

  return (
    <article className="flex flex-col gap-5 py-6 px-8 rounded-lg bg-gray-700">
      <header className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <picture className="bg-gradient-to-r from-green-50 to-purple-50 rounded-full p-[2px]">
            <img
              className="w-10 h-10 rounded-full"
              src={rating.user.avatarUrl!}
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

      <section>
        <p className="text-sm text-gray-300">{rating.description}</p>
      </section>
    </article>
  )
}
