import { NextApiRequest, NextApiResponse } from 'next'
import { Adapter } from 'next-auth/adapters'

import { prisma } from '../prisma'

export function PrismaAdapter(
  req: NextApiRequest,
  res: NextApiResponse
): Adapter {
  return {
    async createUser(user) {
      const createdUser = await prisma.user.create({
        data: {
          name: user.name,
          avatarUrl: user.avatar_url,
          email: user.email
        }
      })

      return {
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        avatar_url: createdUser.avatarUrl!,
        emailVerified: null
      }
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id
        }
      })

      if (!user) {
        return null
      }

      return {
        ...user,
        avatar_url: user.avatarUrl!,
        emailVerified: null
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email
        }
      })

      if (!user) {
        return null
      }

      return {
        ...user,
        avatar_url: user.avatarUrl!,
        emailVerified: null
      }
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            providerAccountId: providerAccountId,
            provider
          }
        },
        include: {
          user: true
        }
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        ...user,
        avatar_url: user.avatarUrl!,
        emailVerified: null
      }
    },

    async updateUser(user) {
      const updatedUser = await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          name: user.name,
          email: user.email,
          avatarUrl: user.avatar_url
        }
      })

      return {
        ...updatedUser,
        avatar_url: updatedUser.avatarUrl!,
        emailVerified: null
      }
    },

    async linkAccount(account) {
      await prisma.account.create({
        data: {
          userId: account.userId,
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          refreshToken: account.refresh_token,
          accessToken: account.access_token,
          expiresAt: account.expires_at,
          tokenType: account.token_type,
          scope: account.scope,
          idToken: account.id_token,
          sessionState: account.session_state
        }
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          userId,
          expires,
          sessionToken
        }
      })

      return {
        sessionToken,
        userId,
        expires
      }
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          sessionToken
        },
        include: {
          user: true
        }
      })

      if (!prismaSession) {
        return null
      }

      const { user, ...session } = prismaSession

      return {
        session: {
          userId: session.userId,
          expires: session.expires,
          sessionToken: session.sessionToken
        },
        user: {
          id: user.id,
          name: user.name,
          email: user.email!,
          avatar_url: user.avatarUrl!,
          emailVerified: null
        }
      }
    },

    async updateSession({ sessionToken, userId, expires }) {
      const prismaSession = await prisma.session.update({
        where: {
          sessionToken
        },
        data: {
          userId,
          expires
        }
      })

      return {
        sessionToken: prismaSession.sessionToken,
        userId: prismaSession.userId,
        expires: prismaSession.expires
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          sessionToken
        }
      })
    }
  }
}
