const Button: IComponent<{
  text: string
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}> = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg bg-gray-300 p-3 font-semibold text-black duration-200 hover:bg-black hover:text-white"
    >
      {text}
    </div>
  )
}

export default Button
