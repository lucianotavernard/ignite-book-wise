import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { prisma } from '@/lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const categoryId = req.query.category as string

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          categoryId: categoryId
        }
      }
    },
    include: {
      ratings: {
        include: {
          user: true
        }
      }
    }
  })

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['bookId'],
    _avg: {
      rate: true
    }
  })

  let userBooksIds: string[] = []

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  )

  if (session) {
    const userId = String(session?.user.id)

    const userBooks = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            userId: userId
          }
        }
      }
    })

    userBooksIds = userBooks?.map((x) => x?.id)
  }

  const booksWithAvgRating = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.bookId === book.id
    )

    return {
      ...book,
      sumRatings: book.ratings.length,
      avgRating: bookAvgRating?._avg.rate,
      alreadyRead: userBooksIds.includes(book.id)
    }
  })

  return res.json({ books: booksWithAvgRating })
}
