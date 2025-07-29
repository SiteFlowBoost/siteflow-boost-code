import React, { useState } from 'react'

const Select = ({ children, value, onValueChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="relative" {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen,
            setIsOpen,
            value,
            onValueChange
          })
        }
        return child
      })}
    </div>
  )
}

const SelectTrigger = React.forwardRef(({ className = '', children, isOpen, setIsOpen, value, ...props }, ref) => (
  <button
    ref={ref}
    className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    onClick={() => setIsOpen && setIsOpen(!isOpen)}
    {...props}
  >
    {children}
    <svg
      className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
))
SelectTrigger.displayName = 'SelectTrigger'

const SelectValue = ({ placeholder, value }) => (
  <span className={value ? '' : 'text-gray-500'}>
    {value || placeholder}
  </span>
)

const SelectContent = ({ className = '', children, isOpen, setIsOpen, onValueChange, ...props }) => {
  if (!isOpen) return null
  
  return (
    <div
      className={`absolute top-full left-0 z-50 w-full mt-1 rounded-md border bg-white shadow-lg ${className}`}
      {...props}
    >
      <div className="p-1">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onValueChange,
              setIsOpen
            })
          }
          return child
        })}
      </div>
    </div>
  )
}

const SelectItem = ({ className = '', children, value, onValueChange, setIsOpen, ...props }) => (
  <div
    className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 ${className}`}
    onClick={() => {
      onValueChange && onValueChange(value)
      setIsOpen && setIsOpen(false)
    }}
    {...props}
  >
    {children}
  </div>
)

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }

