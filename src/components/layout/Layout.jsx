import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../../store/slices/themeSlice'
import { Sidebar } from './Sidebar'
import { Header } from './Header'


export const Layout = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.sidebar)
  const { mode } = useSelector((state) => state.theme)

  useEffect(() => {
    // Initialize theme
    const stored = localStorage.getItem('theme')
    if (stored) {
      dispatch(setTheme(stored))
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      dispatch(setTheme(prefersDark ? 'dark' : 'light'))
    }
  }, [dispatch])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
  }, [mode])

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div
        className={`flex flex-1 flex-col overflow-hidden transition-all duration-300 ${
          isOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}
      >
        <Header />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 w-full">
          <div className="w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

