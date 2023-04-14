import { Box, Image } from '@chakra-ui/react';

export const Header = () => {
	return (
		<Box margin="0 auto" py="6">
			<Image src="/icons/logo.svg" alt="Logo" height="12" width="46" />
		</Box>
	);
};
