import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export const SelectDropdown = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <select
      className={cn(
        'flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm',
        'ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'dark:border-gray-700 dark:bg-gray-800 dark:ring-offset-gray-950',
        'dark:focus-visible:ring-primary-400',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  )
})

SelectDropdown.displayName = 'SelectDropdown'

