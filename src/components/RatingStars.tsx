import { useState } from 'react'

import { clsx } from 'clsx'
import { Star } from 'phosphor-react'

type RatingStarsProps = {
  rating: number
  size?: 'sm' | 'md' | 'lg'
  setRating?: (rating: number) => void
}

const modifiers = {
  sm: {
    size: 20,
    className: 'px-0.5'
  },
  md: {
    size: 24,
    className: 'px-1'
  },
  lg: {
    size: 28,
    className: 'px-0.5'
  }
}

export function RatingStars({
  size = 'sm',
  rating,
  setRating
}: RatingStarsProps) {
  const modifier = modifiers[size]
  const [previewValue, setPreviewValue] = useState(0)

  const isEditable = !!setRating
  const ratingValue = isEditable ? previewValue : rating

  function handleMouseEnter(value: number) {
    if (isEditable) {
      setPreviewValue(value)
    }
  }

  function handleMouseLeave() {
    if (isEditable) {
      setPreviewValue(rating)
    }
  }

  function handleSetValue() {
    if (isEditable) {
      setRating(ratingValue)
    }
  }

  return (
    <span className="flex gap-1 px-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={modifier.size}
          weight={(index + 1) <= ratingValue ? "fill" : "regular"}
          className={clsx('text-purple-100', modifier.className)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={handleSetValue}
        />
      ))}
    </span>
  )
}
