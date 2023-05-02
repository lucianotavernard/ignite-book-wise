import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { buildNextAuthOptions } from '../auth/[...nextauth]'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  )

  if (!session) {
    return res.status(401).end()
  }

  const userId = String(session.user.id)

  const latestUserRating = await prisma.rating.findFirst({
    where: {
      userId: userId
    },
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      book: true
    }
  })

  return res.json({ rating: latestUserRating })
}
