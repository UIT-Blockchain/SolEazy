import { DefaultLayout } from '@layouts/DefaultLayout'
import BackLink from '../components/BackLink'
import Confirmed from '../components/Confirmed'
import PageHeading from '../components/PageHeading'

const ConfirmedPage: IPageComponent = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <BackLink href="/">Home</BackLink>

      <PageHeading>Thankyou, enjoy your cookies!</PageHeading>

      <div className="h-80 w-80">
        <Confirmed />
      </div>
    </div>
  )
}
ConfirmedPage.getLayout = (screen) => <DefaultLayout>{screen}</DefaultLayout>
export default ConfirmedPage
