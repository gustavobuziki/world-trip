import { Box, Image } from '@chakra-ui/react';

export const Header = () => {
	return (
		<Box margin="0 auto" py="6">
			<Image
				src="/icons/nav/logo.svg"
				alt="Logo"
				height={['20px', '45px']}
				width={['82px', '184px']}
			/>
		</Box>
	);
};
