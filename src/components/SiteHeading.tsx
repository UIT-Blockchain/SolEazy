import { PropsWithChildren } from 'react'

const SiteHeading: IComponent = ({ children }: PropsWithChildren<{}>) => {
  return (
    <h1 className="my-8 self-center bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-8xl font-extrabold text-transparent text-center">
      {children}
    </h1>
  )
}
export default SiteHeading
