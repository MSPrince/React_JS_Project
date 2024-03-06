import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GamepadButton as="a" variant="primary">
        Button as link
      </GamepadButton>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </>
  );
}

export default App
