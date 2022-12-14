type TGetLayout = (page: React.ReactNode) => React.ReactNode

interface ISvgComponentProps {
  width?: string | number
  height?: string | number
  color?: string
  viewBox?: string
  opacity?: string | number
  className?: string
}
export interface IProduct {
  pid: string
  name: string
  description: string
  price_sol: number
  price_usd: number
  created_at: string
}
interface IComponent<T = {}> extends React.FC<React.PropsWithChildren<T>> {}
interface IPageComponent<T = {}> extends IComponent<T> {
  getLayout?: TGetLayout
}
interface ISvgComponent<T = {}> extends IComponent<ISvgComponentProps & T> {}
