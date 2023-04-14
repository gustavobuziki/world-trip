import { Box, Image, Text, Flex, VStack } from '@chakra-ui/react';

import { CityBox, Header } from '~/components';

export default function Continent() {
	return (
		<Flex direction="column">
			<Header />
			<Box position="relative" color="white-100">
				<Image src="/images/europa.jpg" alt="europa" width="100%" maxH={500} />
				<Text position="absolute" bottom="59px" left="140px" fontWeight={600} fontSize={48}>
					Europa
				</Text>
			</Box>

			<Flex direction="column" p="140px" gap="20">
				<Flex justifyContent="space-between">
					<Text maxW={600} maxH={211}>
						A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península
						ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de
						águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
					</Text>
					<Flex gap="42px">
						<VStack>
							<Text fontWeight={600} fontSize={48} color="yellow">
								100
							</Text>
							<Text fontWeight={600} fontSize={24} color="gray-400">
								Países
							</Text>
						</VStack>
					</Flex>
				</Flex>

				<Flex direction="column" gap="10">
					<Text fontWeight={500} fontSize={36}>
						Cidades +100
					</Text>
					<Flex flexWrap="wrap" gap="45px">
						<CityBox />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
