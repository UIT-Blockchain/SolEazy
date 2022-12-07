export const Input: IComponent<{
  label: string
  type?: string
  value: string
  handleInputValue: (key: string, value: string) => void
}> = ({ label, type, value, handleInputValue }) => {
  return (
    <div className="grid grid-cols-3 p-4 text-xl">
      <span className="my-auto mr-20 text-right font-semibold">{label}: </span>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => handleInputValue(label, e.target.value)}
          rows={3}
          cols={5}
          style={{ resize: 'none' }}
          className="col-span-2 rounded-lg border-[1px] border-gray-400 bg-white p-3 text-xl"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => handleInputValue(label, e.target.value)}
          className="col-span-2 rounded-lg border-[1px] border-gray-400 bg-white p-3 text-xl"
        />
      )}
    </div>
  )
}
