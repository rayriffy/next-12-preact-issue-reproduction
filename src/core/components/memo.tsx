import { memo, useMemo } from 'react'

export const Memo = memo(() => {
  const value = useMemo(() => 100, [])
  
  return (
    <p className="text-gray-700"></p>
  )
})

