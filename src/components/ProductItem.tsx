import Image from 'next/image'
import { IProduct } from '../screens/product'

const ProductItem: IComponent<IProduct> = ({
  pid,
  name,
  description,
  price_sol,
  price_usd,
}) => {
  return (
    <div className="product-item relative block h-[274px] rounded-md shadow-md bg-white dark:bg-default border-2 border-zinc-100 dark:border-white">
      <div className="item-img relative h-full w-full rounded-md">
        <div className="item-img-overlay"></div>
        <Image
          src={'/coffee.png'}
          alt="coffee"
          className="rounded-lg"
          layout="fill"
        />
      </div>
      <div className="item-content absolute bottom-0 p-4 font-semibold text-lg w-full z-10 flex flex-col items-start justify-center sm:justify-start ">
        <h1 className="">{pid} - {name}</h1>
        <p className="">{description}</p>
        <div>{ price_sol} SOL/item</div>
        <div>{ price_usd} USD/item</div>
      </div>
    </div>
  )
}
export default ProductItem
