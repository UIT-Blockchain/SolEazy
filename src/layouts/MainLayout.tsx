import Footer from '@components/Footer'
import { useAppStore } from '@states/app'
import { useRouter } from 'next/router'
import { cx } from '@utils/common'
import { TransitionLayout } from './TransitionLayout'

export const MainLayout: IComponent = ({ children }) => {
  // Manual switch darkmode with state
  const { darkMode, setDarkMode } = useAppStore()

  const router = useRouter()

  return (
    <div
      className={`h-full w-full p-4 ${
        darkMode === 'dark' ? 'bg-black' : 'bg-rose-50'
      } text-black dark:text-white`}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setDarkMode(darkMode !== 'dark' ? 'dark' : 'light')}
          className="mt-3 rounded-lg bg-blue-400 p-2 text-white duration-500 ease-in-out active:scale-75"
        >
          Change Dark Mode
        </button>
      </div>{' '}
      <>{children}</>
      <Footer />
    </div>
  )
}
