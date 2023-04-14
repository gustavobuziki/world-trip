import { VStack, Image, Text } from '@chakra-ui/react';

interface NavigationProps {
	image: string;
	text: string;
}

export const Navigation = ({ image, text }: NavigationProps) => {
	return (
		<VStack spacing="6">
			<Image src={image} alt={text} />
			<Text fontWeight="semibold" fontSize="24">
				{text}
			</Text>
		</VStack>
	);
};
