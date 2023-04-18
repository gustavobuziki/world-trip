import { Divider, Flex, VStack, Text } from '@chakra-ui/react';

import { Banner, Carousel, Header, Navigation } from '~/components';

export default function Home() {
	return (
		<Flex width="100vw" height="100vh" flexDirection="column" overflowX="hidden">
			<Header />
			<Banner />
			<Navigation />

			<VStack spacing={[6, 14]} align="center" mb={[5, 14]}>
				<Divider height="0.125rem" width="5.625rem" bgColor="gray-400" />
				<Text fontWeight="500" fontSize={[20, 36]} align="center">
					Vamos nessa? <br />
					Então escolha seu continente ou sub-continente
				</Text>
			</VStack>

			<Carousel />
		</Flex>
	);
}
