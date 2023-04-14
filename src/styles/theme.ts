import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: 'white-100',
				color: 'gray-400',
			},
		},
	},
	colors: {
		yellow: '#FFBA08',
		'gray-100': '#999999',
		'gray-400': '#47585B',
		black: '#000000',
		white: '#ffffff',
		'white-100': '#F5F8FA',
		'white-200': '#DADADA',
	},
	fonts: {
		heading: 'Poppins',
		body: 'Poppins',
	},
});
