import { AppProps } from 'next/app'
import * as Tooltip from '@radix-ui/react-tooltip'

import { GlobalStyles } from '../../stitches.config'

export default function App({ Component, pageProps }: AppProps) {
  GlobalStyles()

  return (
    <Tooltip.Provider>
      <Component {...pageProps} />
    </Tooltip.Provider>
  )
}
