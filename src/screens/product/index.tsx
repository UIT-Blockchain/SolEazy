import { ProductsAtom } from '@states/app'
import { getListData } from '@utils/request'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import ProductItem from '../../components/ProductItem'

const ProductScreen: IComponent<{ namePage: string }> = ({ namePage }) => {
  const [products, setProducts] = useRecoilState(ProductsAtom)
  const router = useRouter()
  const fetchData = useCallback(
    async (pageId: number, pageSize: number) =>
      getListData(pageId, pageSize, namePage).then((res) => {
        if (res.status === 200 && res.data) {
          const arr = res.data.filter(
            (item: any) => item[Object.keys(res.data[0])[0]] !== ''
          )
          if (arr.length > 0) setProducts(arr)
        }
      }),
    []
  )
  useEffect(() => {
    fetchData(1, 10)
  }, [namePage])

  return (
    <div>
      <Head>
        <title>Products - Guzer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="mb-8 mr-12 mt-12 flex justify-end">
        <button
          onClick={() => router.push('/create-product')}
          className="mt-3 rounded-lg bg-green-400 p-4 text-xl text-white duration-500 ease-in-out active:scale-75"
        >
          Create a new product
        </button>
      </div>{' '}
      <div className="grid grid-cols-4 gap-4 p-12">
        {products.length > 0 &&
          products.map((product, idx) => (
            <ProductItem key={idx} {...product}></ProductItem>
          ))}
      </div>
    </div>
  )
}
export default ProductScreen
