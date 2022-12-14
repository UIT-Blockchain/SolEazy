import { DefaultLayout } from '@layouts/DefaultLayout'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Head from 'next/head'
import CouponBook from '@components/CouponBook'
import Products from '@components/Products'
import SiteHeading from '@components/SiteHeading'

const PaymentScreen: IComponent = () => {
  // We get the public key of the connected wallet, if there is one
  const { publicKey } = useWallet()

  return (
    <div>
      <Head>
        <title>Payment - Guzer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="m-auto flex p-12 flex-col items-stretch gap-8 pt-24 text-black">
        <div className="basis-1/4">
          <WalletMultiButton className="!bg-gray-900 hover:scale-105" />
        </div>

        {publicKey && <CouponBook />}

        <Products submitTarget="/checkout" enabled={publicKey !== null} />
      </div>
    </div>
  )
}
export default PaymentScreen
