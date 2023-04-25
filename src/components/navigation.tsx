import { useEffect, useState } from 'react';

import axios from 'axios';
import { HStack, Image, Text, useBreakpointValue, Flex, Box } from '@chakra-ui/react';

import { navigationType } from '~/type/continente-type';

export const Navigation = () => {
	const isDesktop = useBreakpointValue({
		base: false,
		md: true,
		lg: true,
	});
	const [navigations, setNavigations] = useState<navigationType[] | []>([]);

	useEffect(() => {
		axios
			.get('http://localhost:3001/navigations')
			.then((resp) => setNavigations(resp.data))
			.catch((e) => console.log(e));
	}, []);

	return isDesktop ? (
		<HStack spacing="6" py="20" justifyContent="center" gap="30">
			{navigations.map((navigation) => (
				<Flex gap="6" direction="column" alignItems="center" key={navigation.name}>
					<Image src={navigation.icon} alt={navigation.name} />
					<Text fontWeight="semibold" fontSize="24">
						{navigation.name}
					</Text>
				</Flex>
			))}
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
