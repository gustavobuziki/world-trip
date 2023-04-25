import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { ContinentContextProvider } from '~/context/continent-context';
import { theme } from '~/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ContinentContextProvider>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</ContinentContextProvider>
	);
}
