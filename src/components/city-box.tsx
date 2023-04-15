import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';

export const CityBox = () => {
	return (
		<Box w={256} h={279} border="1px solid rgba(255, 186, 8, 0.5)" borderRadius="4px">
			<Image src="/images/europa.jpg" alt="cidade" maxH={173} width="100%" />
			<Flex justifyContent="space-between" p="6">
				<VStack spacing="3" alignItems="flex-start">
					<Text fontWeight={600} fontSize={20} color="gray-400">
						Londres
					</Text>
					<Text fontWeight={500} fontSize={16} color="gray-100">
						Reino Unido
					</Text>
				</VStack>
				<Image src="icons/earth.svg" alt="país" height={30} width={30} />
			</Flex>
		</Box>
	);
};
