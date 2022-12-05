import 'animate.css'
import '@styles/globals.scss'
import '@solana/wallet-adapter-react-ui/styles.css'

import { MainLayout } from '@layouts/MainLayout'
import { Web3Layout } from '@layouts/Web3Layout'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

/**
 * Default layout for page component
 */
const DefaultLayout: IComponent = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as IPageComponent).getLayout ||
    ((children) => <DefaultLayout>{children}</DefaultLayout>)

  const PageContent = Component as IPageComponent

  return (
    <RecoilRoot>
      <MainLayout>
        <Web3Layout>{getLayout(<PageContent {...pageProps} />)}</Web3Layout>
      </MainLayout>
    </RecoilRoot>
  )
}

export default MyApp
