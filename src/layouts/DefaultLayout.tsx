import { useAppStore } from '@states/app'
import { useRouter } from 'next/router'
import React from 'react'
import { TransitionLayout } from './TransitionLayout'

export const DefaultLayout: IComponent = ({ children }) => {
  const router = useRouter()

  return (
    <div className="h-full w-full">
      <TransitionLayout location={router.pathname}>
        <>{children}</>
      </TransitionLayout>
    </div>
  )
}
