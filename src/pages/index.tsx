import IconDashboard from '@components/IconDashboard'
import SiteHeading from '@components/SiteHeading'
import TabsDashboard from '@components/TabsDashboard'
import { DefaultLayout } from '@layouts/DefaultLayout'
import PaymentScreen from '@screens/payment'
import ProductScreen from '@screens/product'
import { useAppStore } from '@states/app'
import { cx } from '@utils/common'
const HomePage: IPageComponent = () => {
  const panes = [
    {
      menuItem: <IconDashboard name="tracking" />,
      render: <PaymentScreen />,
    },
    {
      menuItem: <IconDashboard name="product" />,
      render: <ProductScreen namePage="product" />,
    },
    {
      menuItem: <IconDashboard name="member" />,
      render: <div>afhdsfhds</div>,
    },
    {
      menuItem: <IconDashboard name="member" />,
      render: <div>afhdsfhds</div>,
    },
  ]
  return (
    <div className={cx('relative flex items-center justify-center py-20 px-2')}>
      <div className="dashboard z-10 w-full rounded-3xl text-white after:relative ">
        <SiteHeading>The Coffee House</SiteHeading>
        <TabsDashboard panes={panes} />
      </div>
    </div>
  )
}
HomePage.getLayout = (screen) => <DefaultLayout>{screen}</DefaultLayout>
export default HomePage
