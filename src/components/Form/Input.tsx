import { InputHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
}

export function Input({ icon: Icon, className, ...rest }: InputProps) {
  return (
    <div className={clsx('relative flex-1', className && className)}>
      <input
        {...rest}
        className="transition-colors w-full h-12 bg-transparent px-5 pr-12 border border-gray-500 focus:border-green-200 placeholder:text-gray-400 rounded outline-none text-sm"
      />

      {Icon && (
        <span className="-translate-y-1/2 absolute top-1/2 right-4 text-gray-500">
          {Icon}
        </span>
      )}
    </div>
  )
}
