import { Box, Image, Text, Flex, CircularProgress } from '@chakra-ui/react';

import { CityBox, Header } from '~/components';

import { useContinentContext } from '~/context/continent-context';

export default function Continent() {
	const { chosenContinent } = useContinentContext();

	return (
		<Flex direction="column">
			<Header />
			{chosenContinent !== null ? (
				<>
					<Box position="relative" color="white-100">
						<Image
							src={chosenContinent?.image}
							alt={chosenContinent?.name}
							width="100%"
							maxH={[150, 500]}
						/>
						<Text
							position="absolute"
							bottom="59px"
							left="140px"
							fontWeight={600}
							fontSize={[28, 48]}
						>
							{chosenContinent?.name}
						</Text>
					</Box>

					<Flex direction="column" p={[4, '140px']} gap={[4, 20]}>
						<Flex justifyContent="space-between" direction={['column', 'row']}>
							<Text maxW={800} fontSize={[14, 24]}>
								{chosenContinent?.description}
							</Text>
							<Flex gap="42px">
								<Flex direction="column" alignItems="center">
									<Text fontWeight={600} fontSize={[36, 48]} color="yellow">
										{chosenContinent?.data.countries}
									</Text>
									<Text fontWeight={[400, 600]} fontSize={[18, 24]} color="gray-400">
										Países
									</Text>
								</Flex>
								<Flex direction="column" alignItems="center">
									<Text fontWeight={600} fontSize={[36, 48]} color="yellow">
										{chosenContinent?.data.languages}
									</Text>
									<Text fontWeight={[400, 600]} fontSize={[18, 24]} color="gray-400">
										Linguas
									</Text>
								</Flex>
							</Flex>
						</Flex>

						<Flex direction="column" gap={[5, 10]}>
							<Text fontWeight={500} fontSize={[24, 36]}>
								Cidades mais visitadas
							</Text>
							<Flex
								direction={['column', 'row']}
								alignItems="center"
								flexWrap="wrap"
								gap={[5, '45px']}
							>
								{chosenContinent?.popularCities.map((cities) => (
									<CityBox
										city={cities.name}
										country={cities.country}
										icon={cities.icon}
										image={chosenContinent.image}
										key={cities.name}
									/>
								))}
							</Flex>
						</Flex>
					</Flex>
				</>
			) : (
				<Flex alignItems="center" justifyContent="center" height="100vh">
					<CircularProgress isIndeterminate color="yellow" size="32" />
				</Flex>
			)}
		</Flex>
	);
}
