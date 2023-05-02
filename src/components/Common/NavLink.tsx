import { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'

type NavLinkProps = LinkProps & {
  icon?: ReactNode
  children?: ReactNode
}

export function NavLink({ children, icon: Icon, href, ...rest }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      {...rest}
      href={href}
      className={clsx(
        'before:w-1 before:h-6 before:bg-gradient-to-b before:from-green-50 before:to-purple-50 before:mr-4 before:rounded-full transition-all flex items-center font-bold text-gray-400 hover:text-gray-100',
        {
          'before:opacity-1 text-gray-100': isActive,
          'before:opacity-0': !isActive
        }
      )}
    >
      {Icon && <span className="mr-3">{Icon}</span>}
      {children}
    </Link>
  )
}
