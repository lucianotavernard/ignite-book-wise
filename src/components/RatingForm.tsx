import { FormEvent, useState } from 'react'

import { useSession } from 'next-auth/react'
import { Check, X } from 'phosphor-react'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'

import { Textarea } from './Form/Textarea'
import { RatingStars } from './RatingStars'

type RatingFormProps = {
  bookId: string
  onCancel: () => void
}

export function RatingForm({ bookId, onCancel }: RatingFormProps) {
  const { data: session } = useSession()

  const user = session?.user

  const [description, setDescription] = useState('')
  const [currentRate, setCurrentRate] = useState(0)

  const queryClient = useQueryClient()

  const { mutateAsync: handleRate } = useMutation(
    async () => {
      await api.post(`/books/${bookId}/rate`, {
        description,
        rate: currentRate
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['book', bookId])
        queryClient.invalidateQueries(['books'])
        onCancel()
      }
    }
  )

  const submitDisabled = !description.trim() || !currentRate

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (submitDisabled) {
      return
    }

    await handleRate()
  }

  return (
    <div className="flex flex-col gap-6 p-6 rounded-lg bg-gray-700">
      {user && (
        <header className="flex justify-between items-center">
          <section className="flex items-start gap-4">
            <picture className="bg-gradient-to-r from-green-50 to-purple-50 rounded-full p-[2px]">
              <img
                className="w-10 h-10 rounded-full"
                src={user.avatar_url}
                alt={user.name}
              />
            </picture>
            <h5 className="text-base text-gray-100">{user.name}</h5>
          </section>

          <RatingStars
            size="lg"
            rating={currentRate}
            setRating={setCurrentRate}
          />
        </header>
      )}

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <Textarea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />

        <div className="flex justify-end items-center gap-2">
          <button
            className="transition-colors flex justify-center items-center w-10 h-10 border-none rounded bg-gray-600 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            onClick={onCancel}
          >
            <X />
          </button>

          <button
            className="transition-colors flex justify-center items-center w-10 h-10 border-none rounded bg-gray-600 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            disabled={submitDisabled}
          >
            <Check />
          </button>
        </div>
      </form>
    </div>
  )
}
