import { PropsWithChildren } from 'react'

const PageHeading: IComponent = ({ children }: PropsWithChildren<{}>) => {
  return <h3 className="text-6xl font-bold">{children}</h3>
}
export default PageHeading
