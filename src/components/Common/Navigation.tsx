import { useMemo } from 'react'

import { useSession } from 'next-auth/react'

import { Binoculars, ChartLineUp, User } from 'phosphor-react'

import { NavLink } from './NavLink'

const anchors = [
  {
    id: '1',
    href: '/',
    label: 'Início',
    icon: <ChartLineUp size={24} />
  },
  {
    id: '2',
    href: '/explore',
    label: 'Explorar',
    icon: <Binoculars size={24} />
  }
]

export function Navigation() {
  const { data: session } = useSession()

  const navItems = useMemo(() => {
    if (session) {
      return [
        ...anchors,
        {
          id: '3',
          label: 'Perfil',
          href: `/profile/${session.user.id}`,
          icon: <User size={24} />
        }
      ]
    }

    return anchors
  }, [session])

  return (
    <nav className="flex flex-col gap-7">
      {navItems.map((anchor) => (
        <NavLink key={anchor.id} href={anchor.href} icon={anchor.icon}>
          {anchor.label}
        </NavLink>
      ))}
    </nav>
  )
}
