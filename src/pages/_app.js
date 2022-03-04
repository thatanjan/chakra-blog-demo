import { ChakraProvider } from '@chakra-ui/react'

import PageLayout from '@/components/Layouts/PageLayout'
import CustomTheme from 'themes/customTheme'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={CustomTheme}>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</ChakraProvider>
	)
}

export default MyApp
