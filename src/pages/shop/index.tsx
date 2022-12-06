import { DefaultLayout } from '@layouts/DefaultLayout'
import Products from '@components/Products'
import SiteHeading from '@components/SiteHeading'

const ShopPage: IPageComponent = () => {
  return (
    <div className="m-auto flex max-w-4xl flex-col items-stretch gap-8 pt-24">
      <SiteHeading>Cookies Inc</SiteHeading>
      <Products submitTarget="/shop/checkout" enabled={true} />
    </div>
  )
}

ShopPage.getLayout = (screen) => <DefaultLayout>{screen}</DefaultLayout>
export default ShopPage
