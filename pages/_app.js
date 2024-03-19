import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout"
function MyApp({ Component, pageProps }) {
  return (

    <ThirdwebProvider activeChain="mumbai" clientId='1fa12ac61bb67b747b1471e706f1557d'>
     <Layout>
      <Component {...pageProps} />
      <Toaster />
      </Layout>
    </ThirdwebProvider>
  )
}

export default MyApp
