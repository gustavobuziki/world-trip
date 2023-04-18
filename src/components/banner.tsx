import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export const Banner = () => {
	const isDesktop = useBreakpointValue({
		base: false,
		md: true,
		lg: true,
	});

	console.log(isDesktop);

	return (
		<Flex
			justifyContent="space-between"
			px={['4', '36']}
			py={['7', '15']}
			bgGradient="linear(to-r, #1b0352, #010914)"
			maxH={[40, '335px']}
		>
			<Box margin="auto 0">
				<Text fontWeight={500} fontSize={[20, 36]} color="white-100" mb="4">
					6 Continentes, <br /> infinitas possibilidades
				</Text>
				<Text color="white-200" fontSize={[14, 20]} fontWeight={400}>
					Chegou a hora de tirar do papel a viagem que você <br />
					sempre sonhou.
				</Text>
			</Box>

			{isDesktop && (
				<Box>
					<Image
						src="/icons/nav/airplane.svg"
						alt="Airplane"
						width={[320, 417]}
						height={[140, 270]}
					/>
				</Box>
			)}
		</Flex>
	);
};
