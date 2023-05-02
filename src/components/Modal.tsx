import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { clsx } from 'clsx'

type ModalProps = {
  visible: boolean
  children: ReactNode
  onClose: () => void
}

export function Modal({ children, visible, onClose }: ModalProps) {
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                className={clsx(
                  'transform transition ease-in-out duration-500 sm:duration-700 overflow-hidden relative shadow-xl',
                  {
                    '-translate-y-full': !visible,
                    'translate-y-0': visible
                  }
                )}
              >
                <div className="ease-in-out duration-500 relative w-screen max-w-lg py-10 px-14 md:py-12 md:px-16 rounded-xl bg-gray-700">
                  <div className="flex">
                    <button
                      type="button"
                      onClick={onClose}
                      className="absolute top-4 right-4 flex justify-center items-center text-gray-400"
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

                    <div className="flex flex-col w-full mt-3 text-center">
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
