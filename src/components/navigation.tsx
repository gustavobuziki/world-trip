import { HStack, Image, Text, useBreakpointValue, Flex, Box } from '@chakra-ui/react';

export const Navigation = () => {
	const isDesktop = useBreakpointValue({
		base: false,
		md: true,
		lg: true,
	});

	return isDesktop ? (
		<HStack spacing="6" py="20" justifyContent="center" gap="30">
			<Flex gap="6" direction="column" alignItems="center">
				<Image src="/icons/nav/surf.svg" alt="icon" />
				<Text fontWeight="semibold" fontSize="24">
					icon
				</Text>
			</Flex>
		</HStack>
	) : (
		<Flex alignItems="center" justifyContent="center" flexWrap="wrap" py="6" gap="20">
			<Flex alignItems="center" gap="2">
				<Box height="8px" width="8px" borderRadius="100%" bgColor="yellow"></Box>
				<Text>icon</Text>
			</Flex>
		</Flex>
	);
};
