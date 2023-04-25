import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';

interface CityBoxProps {
	city: string;
	country: string;
	icon: string;
	image: string;
}

export const CityBox = ({ city, country, icon, image }: CityBoxProps) => {
	return (
		<Box w={256} h={310} border="1px solid rgba(255, 186, 8, 0.5)" borderRadius="4px">
			<Image src={image} alt="cidade" maxH={173} width="100%" />
			<Flex justifyContent="space-between" p="6">
				<VStack spacing="3" alignItems="flex-start">
					<Text fontWeight={600} fontSize={20} color="gray-400">
						{city}
					</Text>
					<Text fontWeight={500} fontSize={16} color="gray-100">
						{country}
					</Text>
				</VStack>
				<Image src={icon} alt={city} height={30} width={30} />
			</Flex>
		</Box>
	);
};
