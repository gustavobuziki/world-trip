import { Box, Image, Text, Flex } from '@chakra-ui/react';

import { CityBox, Header } from '~/components';

export default function Continent() {
	return (
		<Flex direction="column">
			<Header />
			<Box position="relative" color="white-100">
				<Image src="/images/europa.jpg" alt="europa" width="100%" maxH={[150, 500]} />
				<Text position="absolute" bottom="59px" left="140px" fontWeight={600} fontSize={[28, 48]}>
					Europa
				</Text>
			</Box>

			<Flex direction="column" p={[4, '140px']} gap={[4, 20]}>
				<Flex justifyContent="space-between" direction={['column', 'row']}>
					<Text maxW={600} maxH={211} fontSize={[14, 24]}>
						A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península
						ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de
						águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
					</Text>
					<Flex gap="42px">
						<Box>
							<Text fontWeight={600} fontSize={[36, 48]} color="yellow">
								100
							</Text>
							<Text fontWeight={[400, 600]} fontSize={[18, 24]} color="gray-400">
								Países
							</Text>
						</Box>
					</Flex>
				</Flex>

				<Flex direction="column" gap={[5, 10]}>
					<Text fontWeight={500} fontSize={[24, 36]}>
						Cidades +100
					</Text>
					<Flex direction={['column', 'row']} alignItems="center" flexWrap="wrap" gap={[5, '45px']}>
						<CityBox />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
