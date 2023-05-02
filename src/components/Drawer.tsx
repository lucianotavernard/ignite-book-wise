import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { clsx } from 'clsx'

type DrawerProps = {
  visible: boolean
  children: ReactNode
  onClose: () => void
}

export function Drawer({ children, visible, onClose }: DrawerProps) {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.getElementById('modal-root')
    setMounted(true)
  }, [])

  return !(mounted && ref.current)
    ? null
    : createPortal(
        <>
          <div
            className={clsx(
              'ease-in-out duration-500 fixed inset-0 bg-black/60 bg-opacity-75 transition-opacity',
              {
                'opacity-100 visible': visible,
                'opacity-0 invisible': !visible
              }
            )}
          ></div>

          <div
            className={clsx(
              'transition ease-in-out duration-500 fixed inset-0 overflow-hidden',
              {
                'opacity-100 visible': visible,
                'opacity-0 invisible': !visible
              }
            )}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={clsx(
                  'transform transition ease-in-out duration-500 sm:duration-700 pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10',
                  {
                    'translate-x-full': !visible,
                    'translate-x-0': visible
                  }
                )}
              >
                <div
                  className={clsx(
                    'ease-in-out duration-500 pointer-events-auto relative w-screen max-w-xl',
                    {
                      'opacity-100': visible,
                      'opacity-0': !visible
                    }
                  )}
                >
                  <div className="scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 flex h-full flex-col overflow-y-scroll bg-gray-800 py-6 shadow-xl">
                    <button
                      type="button"
                      onClick={onClose}
                      className="ml-auto mb-4 px-4 sm:px-6 lg:px-10 rounded-md outline-0 text-gray-300 hover:text-white focus:outline-none"
                    >
                      <span className="sr-only">Close panel</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    <div className="relative flex-1 flex flex-col gap-10 px-4 sm:px-6 lg:px-10">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>,
        ref.current
      )
}
