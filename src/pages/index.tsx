import { Divider, Flex, HStack, VStack, Text } from '@chakra-ui/react';

import { Banner, Carousel, Header, Navigation } from '~/components';

export default function Home() {
	return (
		<Flex width="100vw" height="100vh" flexDirection="column" overflowX="hidden">
			<Header />
			<Banner />

			<HStack spacing="32" py="20" px="36" justifyContent="center">
				<Navigation image="/icons/cocktail.svg" text="vida noturna" />
				<Navigation image="/icons/surf.svg" text="praia" />
				<Navigation image="/icons/building.svg" text="moderno" />
				<Navigation image="/icons/museum.svg" text="clássico" />
				<Navigation image="/icons/earth.svg" text="e mais..." />
			</HStack>

			<VStack spacing="14" align="center" mb="14">
				<Divider height=".125rem" width="5.625rem" bgColor="gray-400" />
				<Text fontWeight="500" fontSize="36" align="center">
					Vamos nessa? <br />
					Então escolha seu continente
				</Text>
			</VStack>

			<Carousel />
		</Flex>
	);
}
