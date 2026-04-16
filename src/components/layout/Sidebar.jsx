
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BarChart2,
  ShoppingCart,
  Package,
  LineChart,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
} from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar ,toggleMobileSidebar} from '../../store/slices/sidebarSlice'
import { cn } from '../../lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Leaderboard', href: '/leaderboard', icon: BarChart2 },
  { name: 'Order', href: '/order', icon: ShoppingCart },
  { name: 'Products', href: '/products', icon: Package },
  { name: 'Sales Report', href: '/sales-report', icon: LineChart },
  { name: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Sign Out', href: '/logout', icon: LogOut },
]

/* ✅ Nav Item (FIXED ACTIVE STYLE) */
const NavItem = ({ item, isOpen, onClick }) => {
  const Icon = item.icon

  return (
    <NavLink
      to={item.href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all',
          isActive
            ? 'bg-indigo-500 text-white shadow-md'
            : 'text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
          !isOpen && 'justify-center'
        )
      }
      title={!isOpen ? item.name : ''}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />

      {isOpen && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="truncate"
        >
          {item.name}
        </motion.span>
      )}
    </NavLink>
  )
}

/* ✅ Sidebar */
export const Sidebar = () => {
  const dispatch = useDispatch()
  const { isOpen, isMobileOpen } = useSelector((state) => state.sidebar)

  return (
    <>
      {/* 🔹 Mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
              onClick={() => dispatch(toggleMobileSidebar())}
            />

            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900"
            >
              <div className="flex h-full flex-col">

                {/* Logo */}
                <div className="flex h-16 items-center justify-between border-b px-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-sm font-bold">
                      8°
                    </div>
                    <span className="text-lg font-semibold">Dabangg</span>
                  </div>

                  <button onClick={() => dispatch(toggleMobileSidebar())}>
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Nav */}
                <nav className="flex-1 space-y-1 px-3 py-4">
                  {navigation.map((item) => (
                    <NavItem
                      key={item.name}
                      item={item}
                      isOpen={true}
                      onClick={() => dispatch(toggleMobileSidebar())}
                    />
                  ))}
                </nav>

                {/* ✅ PRO CARD */}
                <div className="p-4">
                  <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white text-center">
                    <div className="text-sm font-semibold mb-1">
                      Dabangg Pro
                    </div>
                    <p className="text-xs opacity-90 mb-3">
                      Get access to all features on tetumbas
                    </p>
                    <button className="w-full rounded-lg bg-white text-indigo-600 text-sm font-medium py-1.5">
                      Get Pro
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🔹 Desktop */}
      <aside
        className={cn(
          'hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 border-r bg-white dark:bg-gray-900 transition-all',
          isOpen ? 'lg:w-64' : 'lg:w-20'
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-sm font-bold">
              8°
            </div>

            {isOpen && (
              <span className="text-lg font-semibold">Dabangg</span>
            )}
          </div>

          <button onClick={() => dispatch(toggleSidebar())}>
            <ChevronLeft
              className={cn('h-5 w-5', !isOpen && 'rotate-180')}
            />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => (
            <NavItem key={item.name} item={item} isOpen={isOpen} />
          ))}
        </nav>

        {/* ✅ PRO CARD (DESKTOP) */}
       
        {isOpen && (
  <div className="p-4">
    <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-5 text-white flex flex-col items-center text-center min-h-[180px]">

      {/* ✅ Top Square Icon */}
      <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
        <div className="h-5 w-5 rounded-md bg-white" />
      </div>

      {/* Title */}
      <div className="text-sm font-semibold mb-1">
        Dabangg Pro
      </div>

      {/* Subtitle */}
      <p className="text-xs opacity-90 mb-4 px-2">
        Get access to all features on tetumbas
      </p>

      {/* Button */}
      <button className="mt-auto w-full rounded-lg bg-white text-indigo-600 text-sm font-medium py-2">
        Get Pro
      </button>

    </div>
  </div>
)}
      </aside>
    </>
  )
}

/* ✅ Mobile Button */
export const MobileSidebarButton = () => {
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => dispatch(toggleMobileSidebar())}
      className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
    >
      <Menu className="h-5 w-5" />
    </button>
  )
}