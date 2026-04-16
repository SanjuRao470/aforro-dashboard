
import { Bell,Moon, Search, ChevronDown,Sun  } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../store/slices/themeSlice'
import { Button } from '../ui/Button'
import { MobileSidebarButton } from './Sidebar'

export const Header = () => {
  const dispatch = useDispatch()
  const { mode } = useSelector((state) => state.theme)

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white px-4 dark:bg-gray-900 dark:border-gray-800">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <MobileSidebarButton />

        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Dashboard
        </h1>
      </div>

      {/* CENTER (Search) */}
      <div className="hidden md:flex flex-1 justify-center px-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full rounded-lg bg-gray-100 py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch(toggleTheme())}
            className="relative"
          >
            {mode === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

        {/* 🌍 Location */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
          <span>🇺🇸</span>
          <span>Eng (US)</span>
          <ChevronDown className="h-4 w-4" />
        </div>

        {/* 🔔 Notification */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Bell className="h-5 w-5" />
          {/* Example badge */}
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* 👤 User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="h-8 w-8 rounded-full object-cover"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Sanju Rao
            </p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>

          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

      </div>
    </header>
  )
}


