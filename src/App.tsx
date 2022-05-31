import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

export default function App(){
  const [count, setCount] = useState(0)
  useHotkeys('command+i', () => setCount(prevCount => prevCount + 1))

  return (
    <p>
      Pressed command+i {count} times.
    </p>
  )
}
