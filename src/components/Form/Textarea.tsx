import { TextareaHTMLAttributes } from 'react'
import { clsx } from 'clsx'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ className, ...rest }: TextAreaProps) {
  return (
    <div className={clsx('relative flex-1', className && className)}>
      <textarea
        {...rest}
        className="transition-colors resize-none w-full h-40 bg-transparent py-4 px-5 border border-gray-500 focus:border-green-200 placeholder:text-gray-400 rounded outline-none text-sm"
      />
    </div>
  )
}
