import { useAppStore } from '@states/app'
import { useRouter } from 'next/router'
import React from 'react'
import { TransitionLayout } from './TransitionLayout'

export const DefaultLayout: IComponent = ({ children }) => {
  // Manual switch darkmode with state

  const router = useRouter()

  return (
    <div className={`h-screen w-full text-black`}>
      
      <TransitionLayout location={router.pathname}>
        <>{children}</>
      </TransitionLayout>
    </div>
  )
}
