import { useState } from 'react'

interface INumberInputProps {
  name: string
  formRef: React.RefObject<HTMLFormElement>
}

const NumberInput: IComponent<INumberInputProps> = ({ name, formRef }) => {
  const [number, setNumber] = useState(0)

  function decrement() {
    setNumber((n) => (n > 0 ? n - 1 : 0))
  }

  function increment() {
    setNumber((n) => n + 1)
  }

  function handleKeyboard(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      decrement()
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      increment()
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      formRef.current?.submit()
    }
  }

  return (
    <div className="flex w-36 flex-row items-center rounded-md border-2 border-gray-200">
      <button
        type="button"
        tabIndex={-1}
        className="basis-1/3 focus:outline-none"
        onClick={decrement}
        onKeyDown={handleKeyboard}
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="number"
        name={name}
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        min={0}
        className="w-12 border-none bg-gray-200 text-center focus:ring-0"
      />
      <button
        type="button"
        tabIndex={-1}
        className="basis-1/3 focus:outline-none"
        onClick={increment}
        onKeyDown={handleKeyboard}
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  )
}
export default NumberInput
